const { Appearance } = require('purgetss.ui')

updateUI(Appearance.get())

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
