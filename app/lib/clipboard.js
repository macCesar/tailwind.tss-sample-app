exports.copyCode = function(e) {
  var parent = e.source.parent
  var children = parent.children
  for (var i = 0; i < children.length; i++) {
    if (children[i].apiName === 'Ti.UI.TextArea') {
      var text = children[i].value
      if (text && text.trim().length > 0) {
        Ti.UI.Clipboard.setText(text.trim())
      }

      var label = e.source
      label.color = '#22c55e'
      setTimeout(function() {
        label.color = '#64748b'
      }, 1000)
      break
    }
  }
}
