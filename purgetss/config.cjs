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
      apply: 'mx-4 mb-1 mt-4 h-auto text-xs font-semibold text-slate-500'
    },
    '.cardDark': {
      apply: 'mx-4 mb-4 h-auto w-screen rounded-xl bg-slate-800'
    },
    '.cardLight': {
      apply: 'bg-surface-high mx-4 mb-4 h-auto w-screen rounded-xl shadow-sm'
    },
    '.fieldDark': {
      apply: 'mt-1 h-10 w-screen rounded-lg border-slate-600 bg-slate-700 pl-3 text-base text-white'
    },
    '.fieldLight': {
      apply: 'mt-1 h-10 w-screen rounded-lg border-gray-300 bg-white pl-3 text-base text-gray-900'
    },
    Window: {
      ios: {
        apply: 'auto-adjust-scroll-view-insets extend-edges-all large-title-enabled status-bar-style-light-content'
      }
    },
    Label: { default: { touchEnabled: false } },
    TextArea: { default: { touchEnabled: false } },
    Button: { android: { backgroundColor: 'transparent' } },
    ScrollView: { default: { contentWidth: 'Ti.UI.FILL', contentHeight: 'Ti.UI.SIZE' }, android: { scrollType: 'vertical' } },
  }
}
