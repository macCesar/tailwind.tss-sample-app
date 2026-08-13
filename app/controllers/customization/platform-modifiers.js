var copyCode = require('clipboard').copyCode

$.codePlatformClasses.value = '<Label class="ios:text-blue-800\n  ios:text-xl android:text-green-800\n  android:text-2xl">\n  Platform Text\n</Label>'

$.codeDeviceClasses.value = '<Window class="tablet:bg-green-500\n  handheld:bg-blue-500">\n  <View class="tablet:bg-green-100\n    handheld:bg-blue-100">\n  </View>\n</Window>'

$.codeCombining.value = '<View class="\n  ios:bg-(#53606b)\n  ios:text-(20px)\n  android:bg-(#8fb63e)\n  android:text-(24px)\n  tablet:w-1/2\n  handheld:w-screen">\n</View>'

$.codeEvents.value = '<Button\n  ios:onSingletap="onTap"\n  android:onClick="onTap">\n  Tap Me\n</Button>'

function onPlatformTap() {
  var platform = Ti.Platform.osname === 'android' ? 'android:onClick' : 'ios:onSingletap'
  $.platformLabel.text = 'Tapped via ' + platform
}

