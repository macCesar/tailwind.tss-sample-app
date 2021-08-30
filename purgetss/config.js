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
		extend: {
			colors: {
				rojo: '#b0100f',
				beige: '#f9f5ec',
				marron: '#800020',
				grisNeutroClaro: '#CCCCCC',
				grisNeutroMediano: '#d6d9e8',
				grisNeutroOscuro: '#d6d9e8',
				fondoMenus: '#2C2F32',
				fondoTablero: '#4E5356',
				labelTablero: '#2C2F32',
				fondoVentanaMenus: '#3D4144',
			}
		}
	},
	corePlugins: {},
};
