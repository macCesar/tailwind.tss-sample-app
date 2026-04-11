var UI = require('purgetss.ui')

updateUI(UI.Theme.get())

$.themeSystemBtn.addEventListener('click', function () { selectTheme('system') })
$.themeLightBtn.addEventListener('click', function () { selectTheme('light') })
$.themeDarkBtn.addEventListener('click', function () { selectTheme('dark') })

function selectTheme(mode) {
  UI.Theme.set(mode)
  updateUI(mode)
  $.trigger('change', { theme: mode })
}

function updateUI(mode) {
  $.themeSystemCheck.visible = (mode === 'system')
  $.themeLightCheck.visible = (mode === 'light')
  $.themeDarkCheck.visible = (mode === 'dark')
}

UI.Theme.onChange(function (e) {
  updateUI(e.theme)
})
