const icons = {
	// interface-line-icon/ili.css
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
	// liquid-container/lci.css
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
}
exports.icon = icons;
exports.icons = icons;

const iconKeys = Object.keys(icons)

const families = {
	// interface-line-icon/ili.css
	'ili': 'Interface-Line-Icon-2',
	// liquid-container/lci.css
	'lci': 'Liquid-Container-Icons'
}
exports.family = families;
exports.families = families;

// Helper Functions
function getIcon(selector) {
  if (selector === undefined || selector === null) {
    console.warn('Selector is null or undefined')
    return 'N/A'
  }

  if (typeof selector !== 'string' && typeof selector !== 'number') {
    console.warn('Selector must be string or number')
    return 'N/A'
  }

  return icons[selector] || 'N/A'
}
exports.getIcon = getIcon

function setTitle(selector, object) {
  if (selector === undefined || selector === null) {
    console.warn('Selector is null or undefined')
    return
  }

  if (!object || typeof object !== 'object') {
    console.warn('Invalid target object')
    return
  }

  object.title = icons[selector] || 'N/A'
}
exports.setTitle = setTitle

function setText(selector, object) {
  if (selector === undefined || selector === null) {
    console.warn('Selector is null or undefined')
    return
  }

  if (!object || typeof object !== 'object') {
    console.warn('Invalid target object')
    return
  }

  object.text = icons[selector] || 'N/A'
}
exports.setText = setText

function getRandomKey() {
  return iconKeys[Math.floor(Math.random() * iconKeys.length)]
}
exports.getRandomKey = getRandomKey

function getRandomValue() {
  return icons[iconKeys[Math.floor(Math.random() * iconKeys.length)]]
}
exports.getRandomValue = getRandomValue
