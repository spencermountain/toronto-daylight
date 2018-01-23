var {h, app} = require('hyperapp')
var div = require('../lib/div')

const state = {
  count: 0
}
const hi = () => {
  console.log('hi')
}
const actions = {
  down: () => {
    console.log('log')
    return state
  },
}

const view = (state, actions) => {
  return div('green f1', {
    onclick: hi
  },
    'hello'
  )
}

window.main = app(state, actions, view, document.body)
