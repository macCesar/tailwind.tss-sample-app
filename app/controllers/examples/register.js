function changeActive() {
  $.rememberMe.active = !$.rememberMe.active
  $.resetClass($.rememberMe, ($.rememberMe.active) ? 'w-6 fa-regular fa-check-square text-accent' : 'w-6 fa-regular fa-square text-on-surface-variant')
}
