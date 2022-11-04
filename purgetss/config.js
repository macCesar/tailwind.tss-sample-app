// ./purgetss/config.js
module.exports = {
	purge: {
		mode: 'all',

		// These options are passed directly to PurgeTSS
		options: {
			legacy: false, // Generates & Purge tailwind.tss v5.x classes
			missing: true, // Report missing classes
			widgets: false, // Purge widgets too
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
};
