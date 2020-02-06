function changeActive() {
	console.log('$.rememberMe.active:', $.rememberMe.active);
	$.rememberMe.active = !$.rememberMe.active;

	$.resetClass($.rememberMe, ($.rememberMe.active) ? 'fas fa-check-square' : 'far fa-square');
}
