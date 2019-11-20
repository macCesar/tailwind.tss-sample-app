(function constructor() {
	'use strict';

	$.win1.open();
}());

function openSample(e) {
	$.win1.openWindow(Alloy.createController(e.source.id).getView());
}
