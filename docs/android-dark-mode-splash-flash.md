# Android: por qué parpadea el Splash Screen al forzar Light/Dark Mode

Investigación hecha el 2026-08-11 sobre PurgeTSS Showcase (Titanium SDK 13.4.0.GA, Android). Documenta por qué la Splash Screen destella al arrancar cuando la app fuerza un modo de apariencia distinto al del sistema, por qué al cambiar de apariencia se cierran las Activities, y por qué en una app con `TabGroup` el arranque se queda atorado en el Splash Screen.

## Síntoma

El sistema está en modo oscuro. La app tiene guardado `light` en su propia configuración de apariencia. Al arrancar en frío, la Splash Screen se ve oscura, destella a claro, vuelve a oscuro y finalmente `index.xml` se dibuja en claro.

Con `require('purgetss.ui').Appearance.init()` en `app/controllers/index.js` el destello era más notorio. Al moverlo a `app/alloy.js` disminuyó, pero no desapareció.

## Causa raíz, en dos capas

### Capa 1 — El tema del Splash es DayNight, y lo pinta Android antes que corra el JS

`build/android/app/src/main/res/values/ti_styles.xml` genera:

```xml
<style name="Theme.Titanium.App" parent="Theme.Titanium.DayNight.Solid"/>
<style name="Theme.AppDerived" parent="Theme.Titanium.App"/>
```

El tema del splash (`Theme.Titanium` → `Base.Theme.Titanium.Splash`) cuelga de `Theme.AppDerived`, así que también es DayNight. En API 31+ su `windowBackground` es `titanium_splash_icon_background`, definido en el AAR del SDK como un `layer-list` cuyo primer item es `?android:attr/colorBackground`:

```xml
<layer-list>
  <item android:drawable="?android:attr/colorBackground"/>
  ...
</layer-list>
```

Y `colorBackground` resuelve a `ti_dark_background` (`#202124`) o a `ti_light_background` (`#FFFFFF`) según el modo del sistema. Ese es el fondo oscuro que aparece primero: **lo pinta Android, no la app**, antes de que se ejecute una sola línea de JavaScript.

En API < 31 el splash usa `@drawable/background`, que es un symlink a `Resources/android/default.png` — imagen fija, no depende del modo.

### Capa 2 — `overrideUserInterfaceStyle` recrea la Activity

`Ti.UI.overrideUserInterfaceStyle` está implementado en `UIModule.setOverrideUserInterfaceStyle(int)` y hace, en este orden:

```
AppCompatDelegate.setDefaultNightMode(mode)      // solo si el valor difiere del actual
→ onConfigurationChanged(...)
→ TiBaseActivity.applyNightMode()
```

`applyNightMode()` llama a `updateActivity()` cuando la Activity está en foreground y el modo cambió. `updateActivity()` es literalmente:

```java
TiApplication.setRootActivity(null);
recreate();
```

La otra ruta llega al mismo sitio: `TiBaseActivity.onConfigurationChanged` compara `uiMode & UI_MODE_NIGHT_MASK` contra `lastUIModeFlags` y, si cambió, también llama a `updateActivity()`.

## Secuencia completa del arranque en frío

1. Sistema en dark. Android pinta el splash con `colorBackground` oscuro.
2. Corre el JS. `Appearance.init()` lee `light` de `Ti.App.Properties` y asigna `Ti.UI.overrideUserInterfaceStyle = LIGHT`.
3. El valor difiere de `MODE_NIGHT_FOLLOW_SYSTEM`, así que se dispara `setDefaultNightMode` y el `recreate()` de la Activity raíz.
4. Segundo arranque de la Activity, ahora resolviendo recursos en modo claro. Splash claro, y `index.xml` en claro.

## Por qué mover `Appearance.init()` a `alloy.js` ayuda pero no lo resuelve

El contenido de `app/alloy.js` se inyecta en el bundle generado **antes** de instanciar el controlador `index`. Comprobado en `build/android/assets/app.js`:

```js
var Alloy = require("/alloy"), _ = Alloy._, Backbone = Alloy.Backbone;
global.Alloy || (global.Alloy = Alloy, ...),

require("purgetss.ui").Appearance.init(),          // ← contenido de app/alloy.js

Ti.UI.addEventListener("sessionbegin", function() { Alloy.createController("index") }),
("undefined" == typeof Ti.UI.hasSession || Ti.UI.hasSession) && Alloy.createController("index");
```

Es el punto más temprano al que se puede llegar desde JavaScript, y garantiza que el modo ya esté fijado antes de crear el primer componente. Pero el `recreate()` ocurre igual: para cuando el JS corre, la Activity ya existe y ya se pintó con el tema del sistema. **No hay forma de evitarlo desde JS.**

Matiz: la asignación fija el modo de forma síncrona, pero el `recreate()` que dispara lo agenda Android — no es instantáneo.

## Por qué se "borran" las Activities al cambiar de apariencia

### Android: es un cambio de configuración

El modo claro/oscuro es un bit de `Configuration.uiMode`. Los recursos (colores, drawables, temas DayNight) se resuelven **al inflar la vista** y quedan grabados como valores concretos en el árbol de views. Android no los re-resuelve en caliente: su único mecanismo ante un cambio de configuración es destruir y recrear la Activity, salvo que ésta declare `android:configChanges="uiMode"` y lo maneje a mano.

### Titanium: una `TiActivity` no se puede reconstruir sola

Una Activity normal sobrevive a la recreación porque su estado va en el `Bundle` de `onSaveInstanceState`. Una `TiActivity` no tiene estado propio serializable: la ventana que muestra es un proxy JS que vive en el runtime V8, registrado en un mapa **estático en memoria**:

```java
private static final HashMap<Integer, TiActivityWindow> windowMap;   // TiActivityWindows
```

La Activity llega a su ventana por un id que viaja en el Intent. Closures, listeners, el controlador de Alloy — nada de eso cabe en un Bundle.

Por eso `TiActivity.onCreate` arranca con esta guarda:

```java
if (!TiRootActivity.isScriptRunning()) {
    Log.i(TAG, "Launching with '" + getClass().getName() + "' is not allowed. Closing activity.");
    isInvalidLaunch = true;
    activityOnCreate(savedInstanceState);
    finish();
    return;
}
```

Traducido: si me están recreando y el script no está corriendo, no tengo forma de saber qué ventana era, así que me cierro. Ese `finish()` es el borrado observado.

El `setRootActivity(null)` previo al `recreate()` es deliberado: `TiRootActivity.onCreate` decide su camino con `isDuplicateInstance = (TiApplication.getInstance().getRootActivity() != null)`. Al dejar la root activity en `null`, el SDK garantiza que la instancia nueva se trate como arranque limpio y no como instancia duplicada.

Es un reinicio controlado, no un bug. La alternativa —manejar `uiMode` en `configChanges` y repintar en caliente— exigiría que el SDK re-resolviera cada recurso de cada view ya creada. Es el mismo motivo por el que una rotación con `configChanges` mal declarado también tumba ventanas: el estado de las ventanas de Titanium vive en el heap de JavaScript, y Android exige poder reconstruir la UI desde cero.

## Nota sobre iOS

En iOS el problema no se presenta igual. No hay recreación de Activity, y el `LaunchScreen.storyboard` por defecto del SDK tiene fondo blanco fijo:

```xml
<color key="backgroundColor" red="1" green="1" blue="1" alpha="1" colorSpace="custom" customColorSpace="sRGB"/>
```

## Opciones consideradas (ninguna implementada)

- **Fondo fijo para el splash.** Sobrescribir `platform/android/res/drawable-v23/titanium_splash_icon_background.xml` con el mismo `layer-list` del SDK pero cambiando `?android:attr/colorBackground` por un color fijo. Los recursos de la app ganan sobre los del AAR. No elimina el `recreate()`, solo lo vuelve invisible al no haber cambio de color. Descartada en su momento por preferencia del autor.
- **No forzar modo.** Dejar la apariencia en `system` **no** evita el `recreate()`. Ver la sección siguiente: el arranque en frío recrea la Activity incluso en modo `system`. Contradice el objetivo de fijar Light.

## El arranque recrea la Activity incluso en modo `system`

`AppCompatDelegate` no arranca en `MODE_NIGHT_FOLLOW_SYSTEM`. Arranca en `MODE_NIGHT_UNSPECIFIED`, y son valores distintos. Comprobado en el bytecode de `appcompat-1.7.0.aar` (`~/.gradle/caches/.../appcompat/1.7.0/`):

```java
public static final int MODE_NIGHT_UNSPECIFIED   = -100;
public static final int MODE_NIGHT_FOLLOW_SYSTEM =   -1;
public static final int MODE_NIGHT_NO            =    1;
public static final int MODE_NIGHT_YES           =    2;
```

Y el inicializador estático de la clase:

```
17: bipush        -100
19: putstatic     Field sDefaultNightMode:I     // getDefaultNightMode() devuelve este campo tal cual
```

Ahora el lado de Titanium. `UIModule.setOverrideUserInterfaceStyle` empieza inicializando su variable local en `-1`, y solo la cambia si recibe 16 o 32:

```
0: iconst_m1        // nightMode = MODE_NIGHT_FOLLOW_SYSTEM (-1)
1: istore_2
2: iload_1
3: bipush 16        // ¿LIGHT?  → 1
...
13: bipush 32       // ¿DARK?   → 2
...
21: iload_2
22: invokestatic AppCompatDelegate.getDefaultNightMode()
25: if_icmpne 29
28: return
```

Es decir: `Appearance.init()` con el modo guardado en `system` pasa `0` (`USER_INTERFACE_STYLE_UNSPECIFIED`), que se traduce a `-1`, y se compara contra `-100`. **Son distintos, así que no hay early-return: hay `setDefaultNightMode(-1)` y `recreate()`.**

La consecuencia es más amplia de lo que parece: **cualquier app Titanium en Android que llame a `Ti.UI.overrideUserInterfaceStyle` durante el arranque recrea su Activity raíz, aunque el modo elegido sea `system` y aunque coincida con el del sistema.** La recreación no la causa forzar un modo distinto; la causa comparar `-1` contra un valor centinela que nunca fue `-1`.

## Caso `TabGroup`: la app no pasa del Splash Screen

### Síntoma

En apps cuya ventana raíz es un `<TabGroup>` (BT5 Colors, Finanzas), agregar `Appearance.init()` —da igual si en `app/alloy.js` o en `app/controllers/index.js`— hace que la app **no pase del Splash Screen**. No hay crash, no hay error en pantalla, simplemente nunca aparece la UI.

En PurgeTSS Showcase, cuya ventana raíz es un `<NavigationWindow>`, el mismo código solo produce el destello descrito arriba y arranca bien.

### La causa: `TabGroupProxy` y `WindowProxy` no resuelven la Activity igual

`TabGroupProxy.handleOpen` (offsets 0–23 del bytecode):

```java
Activity activity = getActivity();                       // ← la Activity DEL PROXY
if (activity == null || activity.isFinishing() || activity.isDestroyed()) {
    return;                                              // ← se rinde en silencio
}
```

`WindowProxy.handleOpen` (offsets 0–22):

```java
Activity activity = TiApplication.getAppCurrentActivity();   // ← la Activity ACTUAL
if (activity == null || activity.isFinishing() || activity.isDestroyed()) {
    return;
}
```

Las guardas son idénticas, pero la primera línea no lo es:

- `KrollProxy.getActivity()` devuelve la Activity guardada en una `WeakReference` **en el momento en que se creó el proxy**. Solo cae a la actual si esa referencia ya fue recolectada por el GC:

  ```java
  if (activity == null || activity.get() == null) {
      initActivity(TiApplication.getAppCurrentActivity());
  }
  return activity.get();
  ```

  Es decir: si la Activity vieja todavía existe pero está muriendo, la devuelve tal cual.

- `TiApplication.getAppCurrentActivity()` → `getCurrentActivity()` lee el tope del `activityStack` vivo, así que después de una recreación devuelve la instancia nueva.

### Por qué termina atorado en el splash

El TabGroup se instancia dentro de `Alloy.createController('index')`, cuando la `TiRootActivity` original sigue viva. El proxy queda amarrado a **esa** instancia, que es justamente la que `Appearance.init()` acaba de mandar a recrear. Cuando corre `$.index.open()`, `handleOpen` mira esa Activity moribunda y hace `return`.

Ese `return` es **mudo**: no lanza excepción, no escribe en el log, no rechaza la promesa. La Activity raíz se queda mostrando su `windowBackground` —que es el splash— porque nunca se le montó una ventana encima. La app no se cuelga: nadie abrió nada y nadie lo reportó.

### Segunda trampa, solo en API 31–33

El mismo `handleOpen` tiene una ruta diferida:

```java
if (decorView.getDisplay() == null) {
    TiSafeDisplay.getDisplaySafely(decorView, (this, activity, options) -> ...);
    return;
}
```

El lambda **captura la Activity vieja** en su closure. Un `getDisplay()` nulo es exactamente el estado de una Activity que se está destruyendo, así que la apertura se difiere y, cuando por fin corre, lo hace contra una instancia ya muerta.

### Por qué `NavigationWindow` no falla

`NavigationWindowProxy extends WindowProxy` y **no sobrescribe `handleOpen`**, así que hereda el camino que consulta `getAppCurrentActivity()`. Resuelve la Activity en el momento del `open()` contra el stack vivo, y por eso sobrevive a la recreación.

Es indistinto dónde esté `Appearance.init()`: en `alloy.js` o en `index.js`, en ambos casos corre antes de `$.index.open()`, que es lo único que importa para este fallo.

### Lo que falta verificar

Lo anterior es el mecanismo del SDK leído en el bytecode, no una traza de ejecución de las apps afectadas. Falta confirmar cuál de los dos modos de fallo se dispara realmente, con un logcat durante el arranque:

```bash
adb -s <serial> logcat -c && adb -s <serial> logcat | grep -E "TiRootActivity|TiActivity|TabGroupProxy"
```

Qué buscar:

- `checkpoint, on root activity create, savedInstanceState:` **dos veces** confirma la recreación.
- `Launching with '...' is not allowed. Closing activity.` señalaría un modo de fallo **distinto** — la guarda `isScriptRunning()` de `TiActivity.onCreate`, es decir, runtime caído — y no el `return` mudo de `TabGroupProxy`.
- Ausencia de ambos apunta al `return` silencioso.

## Solución aplicada en la app Finanzas: fijar el modo antes de que exista la Activity

Todo lo anterior parte del mismo hecho: para cuando corre el JavaScript, la Activity ya existe y ya se pintó con el tema del sistema. La salida es no resolverlo desde JavaScript, sino **adelantarse a la Activity** con un `ContentProvider`, cuyo `onCreate()` corre antes de `Application.onCreate()` y mucho antes de la primera Activity. Es el mismo patrón que usan androidx App Startup y WorkManager para inicializarse sin tocar la clase `Application`.

`Finanzas/app/platform/android/java/com/cuentasclaras/app/AppearanceInitializer.java`:

```java
public final class AppearanceInitializer extends ContentProvider {
    private static final String PREFERENCES_NAME = "titanium";
    private static final String STYLE_PROPERTY = "userInterfaceStyle";
    private static final int STYLE_SYSTEM = 0, STYLE_LIGHT = 16, STYLE_DARK = 32;

    @Override
    public boolean onCreate() {
        Context context = getContext();
        if (context == null) { return false; }
        SharedPreferences preferences =
            context.getSharedPreferences(PREFERENCES_NAME, Context.MODE_PRIVATE);
        AppCompatDelegate.setDefaultNightMode(toNightMode(preferences.getInt(STYLE_PROPERTY, STYLE_SYSTEM)));
        return true;
    }
    // toNightMode: 16 → MODE_NIGHT_NO, 32 → MODE_NIGHT_YES, resto → MODE_NIGHT_FOLLOW_SYSTEM
}
```

Registrado en `Finanzas/tiapp.xml:271`:

```xml
<provider android:name="com.cuentasclaras.app.AppearanceInitializer"
          android:authorities="com.cuentasclaras.app.appearance-initializer"
          android:exported="false" android:initOrder="100"/>
```

### Por qué funciona

Cuando después corre `Appearance.init()` y asigna `Ti.UI.overrideUserInterfaceStyle`, el SDK encuentra que el modo ya es el correcto y **no hace nada**. El early-return está en el propio `UIModule.setOverrideUserInterfaceStyle`:

```
21: iload_2                                              // modo solicitado
22: invokestatic  AppCompatDelegate.getDefaultNightMode()
25: if_icmpne     29
28: return                                               // ← mismo valor: no toca nada
29: ...                                                  // setDefaultNightMode + recreate()
```

No se está desactivando el `recreate()` ni evadiendo una salvaguarda: se elimina la **condición** que lo hacía necesario. El `recreate()` existe porque un cambio de modo en runtime deja un árbol de vistas ya inflado con colores del modo anterior, y hay que reconstruirlo. En arranque en frío con el provider no hay ninguna vista inflada todavía: la primera —y única— inflada ya usa el modo correcto. No hay nada que reconstruir.

El `recreate()` sigue vivo y sigue disparándose cuando el usuario cambia el modo desde Settings, que es justo cuando se necesita. Ese caso sigue destruyendo Activities y proxies del TabGroup; el fix no los preserva ni lo pretende.

Como efecto secundario, el splash también se pinta desde el primer frame en el modo correcto, así que desaparece el destello descrito al inicio de este documento.

### Contrato que asume, verificado contra 13.4.0.GA

El provider duplica tres datos que viven fuera de él. Si alguno cambia, se desincroniza en silencio: fijaría el modo equivocado y volvería el `recreate()`, o peor, la app arrancaría en el modo contrario. Los tres se comprobaron en el bytecode:

- **Archivo de SharedPreferences `titanium`.** `TiApplication` lo crea así: `new TiProperties(getApplicationContext(), "titanium", false)`.
- **Persistencia como `int` nativo.** `TiProperties.setInt` hace `editor.putInt(key, value).apply()`, así que `preferences.getInt(...)` es seguro y no puede lanzar `ClassCastException` dentro del `onCreate()` del provider — que sería un crash en el arranque.
- **Valores 16 / 32 / 0.** Coinciden con `UIModule.getOverrideUserInterfaceStyle`, que devuelve `16` para `MODE_NIGHT_NO`, `32` para `MODE_NIGHT_YES` y `0` por defecto.

La clave `userInterfaceStyle` no es del SDK: la define PurgeTSS en `PROP_KEY` dentro del módulo `Appearance` de `purgetss.ui.js`. Ese contrato es interno y por tanto de bajo riesgo.

### Lo que sigue siendo un bug del SDK

Esta solución vive en la app. El comportamiento asimétrico de `TabGroupProxy.handleOpen` —resolver contra la Activity del proxy y rendirse con un `return` mudo— sigue igual en el SDK, y cualquier otra app con `TabGroup` que llame a `Ti.UI.overrideUserInterfaceStyle` durante el arranque se va a topar con lo mismo, sin un solo mensaje en el log que lo explique.

Verificado en las cuatro versiones instaladas localmente: el arranque de `TabGroupProxy.handleOpen` es idéntico byte por byte en 12.8.0.GA, 13.1.1.GA, 13.3.1.GA y 13.4.0.GA. No es una regresión reciente, y subir de versión no lo corrige.

### Qué debería corregirse en el SDK

Ordenado de más barato y más obviamente correcto a más profundo:

1. **Tratar `MODE_NIGHT_UNSPECIFIED` (-100) y `MODE_NIGHT_FOLLOW_SYSTEM` (-1) como equivalentes** en la comparación de `setOverrideUserInterfaceStyle`. Elimina de un plumazo la recreación en frío de toda app cuyo modo sea `system`. Es un cambio de una condición.
2. **Que Titanium sea dueño de la persistencia del modo.** Hoy aplica el valor pero no lo restaura antes de crear la Activity, lo que obliga a cada app a persistirlo por su cuenta — que es justo lo que hace PurgeTSS y luego el provider tiene que volver a leer.
3. **Restaurar el modo en `TiApplication.onCreate()`**, que corre antes de cualquier `TiBaseActivity`. Eso haría innecesario el `ContentProvider` de la app.
4. **En API 31+, usar `UiModeManager.setApplicationNightMode()`**, que persiste el modo a nivel de sistema por aplicación. *(No verificado en este análisis: la afirmación de que además permite al sistema pintar el splash con la apariencia correcta no se comprobó.)*
5. **Reducir las rutas de recreación a una sola.** Hoy `setOverrideUserInterfaceStyle` llama a AppCompat, dispara manualmente `onConfigurationChanged()` y luego `applyNightMode()`; y `TiBaseActivity.onConfigurationChanged` puede recrear por su cuenta al comparar `uiMode & UI_MODE_NIGHT_MASK`.
6. **`TabGroupProxy.handleOpen`**, aparte: caer a `getAppCurrentActivity()` en lugar de rendirse, y loguear cuando no haya Activity utilizable.

Lo que el SDK **no** debería prometer es "nunca recrear Activities al cambiar de apariencia". Un cambio real de `uiMode` con la app abierta recrea Activities por diseño de Android, y está bien que así sea. Lo que sí debe garantizar es no recrear en frío por una diferencia artificial de centinelas, restaurar la apariencia antes del splash, hacer una sola recreación por cambio real, y no dejar proxies apuntando a una Activity destruida.

### Precisión sobre el papel del `TabGroup`

El fallo no pertenece al `TabGroup` ni a PurgeTSS: está en la implementación Android de `Ti.UI.overrideUserInterfaceStyle`. Pero conviene no atribuir la diferencia entre apps a que el `TabGroup` tenga "más proxies ligados a la Activity raíz". La diferencia medida es una sola línea de código, la primera de cada `handleOpen`: `TabGroupProxy` consulta `getActivity()` —una `WeakReference` congelada al crear el proxy— y `WindowProxy` consulta `TiApplication.getAppCurrentActivity()` —el tope del stack vivo—. No es cuestión de grado: es cuál Activity se consulta. Por eso una app con `NavigationWindow` arranca de forma reproducible y una con `TabGroup` se queda en el splash de forma igualmente reproducible.

Nota sobre enlaces: el repositorio oficial es `tidev/titanium-sdk`. `titanium_mobile` es el nombre anterior del repo y redirige, pero conviene citar el actual.

## Cómo se obtuvo la evidencia

El SDK Android se distribuye compilado. La inspección se hizo descomprimiendo el AAR y desensamblando con `javap`:

```bash
SDK=~/Library/Application\ Support/Titanium/mobilesdk/osx/13.4.0.GA
unzip -q "$SDK/android/m2repository/org/appcelerator/titanium/13.4.0/titanium-13.4.0.aar" -d aar
unzip -q aar/classes.jar -d cls

javap -p -c cls/ti/modules/titanium/ui/UIModule.class
javap -p -c cls/org/appcelerator/titanium/TiBaseActivity.class
javap -p -c cls/org/appcelerator/titanium/TiActivity.class
javap -p -c cls/org/appcelerator/titanium/TiRootActivity.class
javap -p    cls/org/appcelerator/titanium/TiActivityWindows.class
javap -p -c cls/ti/modules/titanium/ui/TabGroupProxy.class
javap -p -c cls/ti/modules/titanium/ui/WindowProxy.class
javap -p    cls/ti/modules/titanium/ui/NavigationWindowProxy.class
javap -p -c cls/org/appcelerator/kroll/KrollProxy.class

cat aar/res/values/values.xml              # temas Theme.Titanium.*
cat aar/res/values-night-v8/values-night-v8.xml
```

Los temas generados para este proyecto están en `build/android/app/src/main/res/values*/ti_styles.xml`, y el bundle JavaScript resultante en `build/android/assets/app.js`.
