const { src, dest, watch, parallel, series } = require('gulp');
const start = require('gulp-watch');

function style() {
  return src('./app/styles/**/*.css').pipe(dest('./app/assets/css'));
}

exports.style = style;
