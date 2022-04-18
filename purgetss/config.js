// ./purgetss/config.js
module.exports = {
	purge: {
		mode: 'all',

		// These options are passed through directly to PurgeTSS
		options: {
			widgets: false, // Purge widgets
			missing: true, // Report missing classes
			safelist: [] // Array of classes to keep
		}
	},
	theme: {
		extend: {},
		Label: { default: { touchEnabled: false } },
		TextArea: { default: { touchEnabled: false } },
		Button: { android: { backgroundColor: 'transparent' } },
		ScrollView: { default: { contentWidth: 'Ti.UI.FILL', contentHeight: 'Ti.UI.SIZE' }, android: { scrollType: 'vertical' } },
	},
	corePlugins: {}
};
