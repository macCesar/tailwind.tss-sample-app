// ./purgetss/config.js
module.exports = {
	purge: {
		mode: 'all',

		// These options are passed through directly to PurgeTSS
		options: {
			safelist: []
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
