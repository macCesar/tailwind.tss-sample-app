# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2024-06-15

### Added
- Redesigned main index as a categorized showcase navigation hub with themed card rows
- 7 customization example screens: config file, custom rules, apply directive, opacity modifier, arbitrary values, platform modifiers, and icon fonts
- Settings screen with toggles and grouped form patterns
- Clipboard utility library
- Semantic colors (`semantic.colors.json`) for theme-aware color tokens
- Code-display widget for formatted code snippets in showcase screens
- `utilities.tss` replacing the old `tailwind.tss`
- CLAUDE.md with Titanium SDK knowledge index

### Changed
- Upgraded Titanium SDK from 12.7.0.GA to 13.2.0.GA
- Upgraded Font Awesome from v6.7.2 to v7.2.0 (new font files and icon mappings)
- Renamed app from "PurgeTSS - Sample App" to "PurgeTSS Showcase"
- Restyled example views (house, nike, politico, projects, register, shadows) with dark theme
- Updated PurgeTSS config with semantic colors, apply directives, and Window defaults
- Upgraded `purgetss.ui.js` to v7.5 with collision detection, appearance system, and grid helpers
- Rewrote README to document the new showcase architecture

### Removed
- Legacy example views: card, customer, villa, sample
- Old screenshot images (`*-3.png`)
- `tailwind.tss` and `tailwind.config.js` (replaced by `utilities.tss`)
- Font Awesome 6 font files (replaced by v7)
- Deprecated `uses-sdk` entries from Android manifest
