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
		ScrollView: { default: { contentWidth: 'Ti.UI.FILL', contentHeight: 'Ti.UI.SIZE' }, android: { scrollType: 'vertical' } },
		Button: { android: { backgroundColor: 'transparent' } },
		Label: { default: { touchEnabled: false } },
		TextArea: { default: { touchEnabled: false } },
	},
	corePlugins: {}
};
