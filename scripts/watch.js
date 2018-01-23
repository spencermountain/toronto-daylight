var exec = require('child_process').exec;

//ship all of tachyons, for now
exec('mv ./node_modules/tachyons/css/tachyons.min.css ./builds/bundle.css')

//watch our javascript for changes
exec(`watchify src/index.js -t babelify -o 'uglifyjs -cm > builds/bundle.js' -v`)

//hot-reload with browser-sync
exec('browser-sync start --server --files "./builds"')
