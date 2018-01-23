var exec = require('child_process').exec;
var babel = require("babel-core");
var fs = require("fs");

//browerify + uglify
exec('./node_modules/.bin/browserify src/index.js -o ./builds/bundle.js')

babel.transformFile("./builds/bundle.js", {}, function(err, result) {
  fs.writeFileSync('./builds/bundle.es5.js', result.code) // => { code, map, ast }
  exec('uglifyjs ./builds/bundle.es5.js --compress --mangle -o ./builds/bundle.es5.js')
});

// //css post-process
// var content = ['./src/**/*.js'];
// var css = ['./lib/tachyons.min.css'];
// var options = {
//   // Will write purified CSS to this file.
//   output: './builds/bundle.css',
//   // Will minify CSS code in addition to purify.
//   minify: true,
//   // Log removed selectors.
//   rejected: false
// };
//
// purifycss(content, css, options);
