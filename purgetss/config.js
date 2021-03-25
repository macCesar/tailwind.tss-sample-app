// ./purgetss/config.js
module.exports = {
	purge: {
		mode: 'all',

		// These options are passed through directly to purgeTSS
		options: {
			safelist: [ 'Window', 'View', 'ImageView' ],
		}
	},
	theme: {
		extend: {}
	},
	corePlugins: {},
};
