// ./purgetss/config.js
module.exports = {
  purge: {
    mode: 'all',
    method: 'sync',
    options: {
      missing: true,
      widgets: false,
      safelist: [],
      plugins: []
    }
  },
  theme: {
    extend: {
      fontFamily: {
        mono: 'FiraCode-Regular'
      },
      colors: {
        surface: {
          DEFAULT: 'surfaceColor',
          high: 'surfaceHighColor'
        },
        'on-surface': 'textColor',
        'on-surface-variant': 'textSecondaryColor',
        muted: 'textMutedColor',
        border: 'borderColor',
        accent: 'accentColor'
      },
    },
    '.actionBtn': {
      apply: 'mb-2 mr-2 h-8 w-20 rounded-lg text-xs font-semibold text-white'
    },
    '.section': {
      apply: 'mx-4 mb-1 mt-4 h-auto text-xs font-semibold text-muted'
    },
    '.card': {
      apply: 'mx-4 mb-4 h-auto w-screen rounded-xl bg-surface-high'
    },
    '.field': {
      apply: 'mt-1 h-10 w-screen rounded-lg border-border bg-surface-high pl-3 text-base text-on-surface'
    },
    Window: {
      ios: {
        apply: 'auto-adjust-scroll-view-insets extend-edges-all large-title-enabled'
      }
    },
    Label: { default: { touchEnabled: false } },
    TextArea: { default: { touchEnabled: false } },
    Button: { android: { backgroundColor: 'transparent' } },
    ScrollView: { default: { contentWidth: 'Ti.UI.FILL', contentHeight: 'Ti.UI.SIZE' }, android: { scrollType: 'vertical' } },
  }
}
