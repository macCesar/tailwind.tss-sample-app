function changeActive() {
	$.rememberMe.active = !$.rememberMe.active;

	$.resetClass($.rememberMe, ($.rememberMe.active) ? 'w-6 far fa-check-square text-gray-800' : 'w-6 far fa-square text-gray-800');
}
