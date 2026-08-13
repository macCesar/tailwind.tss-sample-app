# PurgeTSS Showcase App

A comprehensive showcase and interactive documentation app for [PurgeTSS](https://purgetss.com/) — the utility-first styling framework for [Titanium SDK](https://titaniumsdk.com/) and [Alloy](https://titaniumsdk.com/guide/Alloy_Framework/).

Built entirely with PurgeTSS utility classes, this app demonstrates real-world UI patterns, dark/light theming, and every major customization feature available in the framework.

## What's Inside

### Design Examples
Seven polished UI screens showing PurgeTSS in action:

| Screen               | Theme | Demonstrates                                                     |
| -------------------- | ----- | ---------------------------------------------------------------- |
| **Product Card**     | Dark  | E-commerce layout, gradients, composite positioning              |
| **Project List**     | Dark  | Structured lists, icon buttons, metadata rows                    |
| **Login Form**       | Dark  | Form inputs, validation patterns, toggle states                  |
| **Shadows & Depth**  | Dark  | Shadow levels, opacity, border radius                            |
| **Article Layout**   | Light | Editorial typography, image integration                          |
| **Property Listing** | Light | Sectioned cards, horizontal layouts, realtor info                |
| **Settings Screen**  | Light | Semantic colors, toggles, grouped form rows, theme picker widget |

### Customization Reference
Seven interactive documentation screens covering PurgeTSS configuration in depth:

- **The Config File** — `purge` options, `override` vs `extend`, custom colors & spacing
- **Custom Rules** — Styling Ti Elements, IDs, classes, conditional blocks
- **The Apply Directive** — Bundling utility classes into reusable rules
- **The Opacity Modifier** — Color transparency with `/50` syntax
- **Arbitrary Values** — One-off values using parentheses notation `( )`
- **Platform & Device Modifiers** — `ios:`, `android:`, `tablet:`, `handheld:` prefixes
- **Icon Font Libraries** — Font Awesome 7, Framework7, Material Icons, `build-fonts` command

Each documentation screen includes copyable code examples with tap-to-copy functionality.

## Key Features

- **Dark & Light Themes** with semantic colors via `semantic.colors.json`
- **PurgeTSS UI Module** (v7.12.1) for appearance management
- **Theme Picker Widget** for light/dark/system selection
- **English & Spanish localization** with an in-app language selector
- **Font Awesome 7** icon integration
- **Fira Code** monospace font for code examples
- **Copy-to-clipboard** on all code examples
- **Platform-aware** event handling (`ios:onSingletap` / `android:onClick`)
- **Mac Catalyst** support — runs natively on macOS
- **Custom `apply` rules** for reusable component styles (`card`, `field`, `section`, `actionBtn`, etc.)

## Getting Started

### Prerequisites

- [Titanium SDK](https://titaniumsdk.com/) 13.4.0+ (Mac Catalyst support with 13.1.1+)
- [PurgeTSS](https://purgetss.com/) installed globally:

```bash
[sudo] npm i -g purgetss
```

### Run the App

1. Clone this repository
2. Run PurgeTSS to generate `app.tss`:
   ```bash
   purgetss
   ```
3. Build and run on a device or simulator:
   ```bash
   ti build -p ios
   ti build -p android
   ti build -p ios -T macos    # Mac Catalyst (requires SDK 13.1.1+)
   ```

### Important Notes

> **`app.tss` is auto-generated.** PurgeTSS overwrites it on every build. Your first run backs it up as `_app.tss`. Add custom styles in `_app.tss` or define them in `purgetss/config.cjs`.

> **`mode: 'all'` is required** if you style Ti Elements (`Label`, `Window`, etc.) in `config.cjs`. This project uses it.

## Project Structure

```
app/
├── controllers/
│   ├── index.js                    # Main navigation
│   ├── examples/                   # Design example controllers
│   └── customization/              # Documentation view controllers
├── lib/
│   ├── purgetss.ui.js              # PurgeTSS UI module (v7.12.1)
│   ├── purgetss.fonts.js           # Font module
│   ├── fontawesome.js              # Font Awesome 7 definitions
│   └── clipboard.js                # Copy-to-clipboard utility
├── views/
│   ├── index.xml                   # Main navigation screen
│   ├── examples/                   # Design showcase views
│   │   ├── nike.xml                # Product card
│   │   ├── projects.xml            # Project list
│   │   ├── register.xml            # Login form
│   │   ├── shadows.xml             # Shadows & depth
│   │   ├── politico.xml            # Article layout
│   │   ├── house.xml               # Property listing
│   │   └── settings.xml            # Settings screen (light theme)
│   └── customization/              # Documentation views
│       ├── config-file.xml         # The Config File
│       ├── custom-rules.xml        # Custom Rules
│       ├── apply-directive.xml     # Apply Directive
│       ├── opacity-modifier.xml    # Opacity Modifier
│       ├── arbitrary-values.xml    # Arbitrary Values
│       ├── platform-modifiers.xml  # Platform & Device Modifiers
│       └── icon-fonts.xml          # Icon Font Libraries
├── widgets/
│   └── purgetss.theme-picker/      # Light/Dark/System theme widget
├── i18n/
│   ├── en/strings.xml              # English strings
│   └── es/strings.xml              # Spanish strings
└── assets/
    ├── fonts/                      # Font Awesome 7 and Fira Code font files
    └── semantic.colors.json        # Light/dark color definitions

purgetss/
├── config.cjs                      # PurgeTSS configuration
└── styles/
    ├── definitions.css             # Class definitions
    └── utilities.tss               # Utility styles
```

## Configuration

The app's `purgetss/config.cjs` uses semantic colors for theming:

```javascript
module.exports = {
  purge: {
    mode: 'all',
    method: 'sync',
    options: { missing: true }
  },
  theme: {
    extend: {
      colors: {
        surface: { DEFAULT: 'surfaceColor', high: 'surfaceHighColor' },
        'on-surface': 'textColor',
        accent: 'accentColor'
      }
    },
    // Reusable component rules
    '.cardDark': { apply: 'mx-4 mb-4 h-auto w-screen rounded-xl bg-slate-800' },
    '.cardLight': { apply: 'bg-surface-high mx-4 mb-4 h-auto w-screen rounded-xl shadow-sm' },
    '.section': { apply: 'mx-4 mb-1 mt-4 h-auto text-xs font-semibold text-slate-500' }
  }
}
```

Color values like `surfaceColor` reference entries in `app/assets/semantic.colors.json`, enabling automatic light/dark mode support.

## Links

- [PurgeTSS Documentation](https://purgetss.com/)
- [PurgeTSS on npm](https://www.npmjs.com/package/purgetss)
- [Titanium SDK](https://titaniumsdk.com/)
