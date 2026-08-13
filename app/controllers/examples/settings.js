const { Appearance } = require('purgetss.ui')

updateUI(Appearance.get())
updateLangUI(Ti.Locale.currentLanguage)

function selectDark() { selectAppearance('dark') }
function selectLight() { selectAppearance('light') }
function selectSystem() { selectAppearance('system') }

function selectAppearance(value) {
  Appearance.set(value)
  updateUI(value)
}

function updateUI(value) {
  $.themeDarkCheck.visible = (value === 'dark')
  $.themeLightCheck.visible = (value === 'light')
  $.themeSystemCheck.visible = (value === 'system')
}

function selectEnglish() { changeLanguage('en') }
function selectSpanish() { changeLanguage('es') }

function changeLanguage(lang) {
  Ti.Locale.setLanguage(lang)
  updateLangUI(lang)
}

function updateLangUI(lang) {
  $.langEnglishCheck.visible = (lang === 'en')
  $.langSpanishCheck.visible = (lang === 'es')
}
