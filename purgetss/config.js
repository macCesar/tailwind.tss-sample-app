// ./purgetss/config.js
module.exports = {
  purge: {
    mode: 'all',
    method: 'sync', // set how to execute auto-purging: sync or async

    // These options are passed directly to PurgeTSS
    options: {
      legacy: false, // Generates & purges tailwind.tss v5.x classes
      missing: true, // Reports missing classes
      widgets: false, // Purges widgets too
      safelist: [], // Array of classes to keep
      plugins: [] // Array of properties to ignore
    }
  },
  theme: {
		extend: {},
		Label: { default: { touchEnabled: false } },
		TextArea: { default: { touchEnabled: false } },
		Button: { android: { backgroundColor: 'transparent' } },
		ScrollView: { default: { contentWidth: 'Ti.UI.FILL', contentHeight: 'Ti.UI.SIZE' }, android: { scrollType: 'vertical' } },
  }
}
