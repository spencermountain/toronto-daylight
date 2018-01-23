var {h, app} = require('hyperapp')
var div = require('../lib/div')

const view = (state, actions) => {
  console.log('render')
  return div('green f1 link pointer', {
    onclick: actions.hi
  },
    (state.on ? 'on' : 'off')
  )
}

window.main = app({}, {}, view, document.body)
