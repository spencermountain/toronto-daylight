var purifycss = require("purify-css")
//css post-process
var content = ['./src/**/*.js'];
var css = ['./node_modules/tachyons/css/tachyons.min.css'];
var options = {
  // Will write purified CSS to this file.
  output: './builds/bundle.css',
  // Will minify CSS code in addition to purify.
  minify: true,
  // Log removed selectors.
  rejected: false
};

purifycss(content, css, options);
