exports.isObject = (a) => Object.prototype.toString.call(a) === '[object Object]'
exports.isArray = (a) => Object.prototype.toString.call(a) === '[object Array]'
exports.isString = (a) => typeof a === 'string'
