var h = require('hyperapp').h
var fns = require('./lib')

const div = function(a, b, c) {
  let attr = {}
  let arr = []
  //tachyons classnames - '', {}, []
  if (fns.isString(a)) {
    attr.class = a
    //secondary styling
    if (fns.isObject(b)) {
      attr.style = b
      arr = c
    } else {
      arr = b
    }
  } else if (fns.isObject(a)) {
    //full proper attrs object  - {}, []
    attr = a
    arr = b
  } else {
    //children as first param - []
    arr = a
  }
  return h('div', attr, arr)
}
module.exports = div
