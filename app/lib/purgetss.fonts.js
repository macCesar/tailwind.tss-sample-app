exports.getIcon = function getIcon(selector) {
	if (selector === undefined) throw new Error('Selector missing!');
	return (icons[selector] !== undefined) ? icons[selector] : 'N/A';
};

exports.setTitle = function setTitle(selector, object) {
	if (selector === undefined || object === undefined) throw new Error('Selector or target Object missing!');
	object.title = (icons[selector] !== undefined) ? icons[selector] : 'N/A';
};

exports.setText = function setText(selector, object) {
	if (selector === undefined || object === undefined) throw new Error('Selector or target Object missing!');
	object.text = (icons[selector] !== undefined) ? icons[selector] : 'N/A';
};

exports.getRandomKey = function getRandomKey() {
	return Object.keys(icons)[Math.floor(Math.random() * Object.keys(icons).length)];
};

exports.getRandomValue = function getRandomValue() {
	return icons[Object.keys(icons)[Math.floor(Math.random() * Object.keys(icons).length)]];
};

const icons = {
	// style
	'ili': {
		'archive': '\ue900',
		'attachment': '\ue901',
		'calander': '\ue902',
		'chat': '\ue903',
		'database': '\ue904',
		'deleteTrash': '\ue905',
		'download': '\ue906',
		'edit': '\ue907',
		'email': '\ue908',
		'files': '\ue909',
		'folder': '\ue90a',
		'home': '\ue90b',
		'image': '\ue90c',
		'interface2': '\ue90d',
		'interface': '\ue90e',
		'laptop': '\ue90f',
		'monitor': '\ue910',
		'pageScroll': '\ue911',
		'position': '\ue912',
		'settings2': '\ue913',
		'settings': '\ue914',
		'share': '\ue915',
		'stats': '\ue916',
		'time': '\ue917',
	},
	// style
	'lci': {
		'aerosolBottleChemical': '\ue900',
		'alcoholBottleGlass': '\ue901',
		'babyBottle': '\ue902',
		'chemicalGallonLaboratory': '\ue903',
		'iceBottleAlcohol': '\ue904',
		'jamBottleFood': '\ue905',
		'juiceBottleDrink': '\ue906',
		'ketchupBottle': '\ue907',
		'lotionTubeMedical': '\ue908',
		'medicineBottleHealth': '\ue909',
		'milkBottleGlass': '\ue90a',
		'oilGallonFuel': '\ue90b',
		'plasticBottleDrink': '\ue90c',
		'poisonBottleChemical': '\ue90d',
		'shampooBottleHealth': '\ue90e',
		'skincareTubeMedical': '\ue90f',
		'soapBottleMedicine': '\ue910',
		'sodaBottleDrink': '\ue911',
		'sportBottleDrink': '\ue912',
		'sprayBottleWater': '\ue913',
		'thermoBottleGlass': '\ue914',
		'tumblerBottleDrink': '\ue915',
		'waterBottleDrink': '\ue916',
		'waterGallonDrink': '\ue917',
		'wineBottleAlcohol': '\ue918',
	}
};
exports.icons = icons;
