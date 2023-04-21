function changeActive() {
	$.rememberMe.active = !$.rememberMe.active
	$.resetClass($.rememberMe, ($.rememberMe.active) ? 'w-6 fa-regular fa-check-square text-gray-800' : 'w-6 fa-regular fa-square text-gray-800')
}
