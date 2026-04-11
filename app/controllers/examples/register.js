function changeActive() {
  $.rememberMe.active = !$.rememberMe.active
  $.resetClass($.rememberMe, ($.rememberMe.active) ? 'w-6 fa-regular fa-check-square text-blue-400' : 'w-6 fa-regular fa-square text-slate-400')
}
