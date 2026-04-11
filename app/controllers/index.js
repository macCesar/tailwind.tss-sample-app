// --- Examples ---
function openNike() {
  $.navWin.openWindow(Alloy.createController('examples/nike').getView())
}

function openProjects() {
  $.navWin.openWindow(Alloy.createController('examples/projects').getView())
}

function openRegister() {
  $.navWin.openWindow(Alloy.createController('examples/register').getView())
}

function openShadows() {
  $.navWin.openWindow(Alloy.createController('examples/shadows').getView())
}

function openPolitico() {
  $.navWin.openWindow(Alloy.createController('examples/politico').getView())
}

function openHouse() {
  $.navWin.openWindow(Alloy.createController('examples/house').getView())
}

function openSettings() {
  $.navWin.openWindow(Alloy.createController('examples/settings').getView())
}

// --- Customization ---
function openConfigFile() {
  $.navWin.openWindow(Alloy.createController('customization/config-file').getView())
}

function openCustomRules() {
  $.navWin.openWindow(Alloy.createController('customization/custom-rules').getView())
}

function openApplyDirective() {
  $.navWin.openWindow(Alloy.createController('customization/apply-directive').getView())
}

function openOpacityModifier() {
  $.navWin.openWindow(Alloy.createController('customization/opacity-modifier').getView())
}

function openArbitraryValues() {
  $.navWin.openWindow(Alloy.createController('customization/arbitrary-values').getView())
}

function openPlatformModifiers() {
  $.navWin.openWindow(Alloy.createController('customization/platform-modifiers').getView())
}

function openIconFonts() {
  $.navWin.openWindow(Alloy.createController('customization/icon-fonts').getView())
}

require('purgetss.ui').Appearance.init()

$.navWin.open()
