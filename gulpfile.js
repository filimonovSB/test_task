const gulp = require('gulp')
const requireDir = require('require-dir')
const tasks = requireDir('tasks')

exports.style = tasks.style
exports.html = tasks.html
exports.fonts = tasks.fonts
exports.img = tasks.img
exports.watch = tasks.watch
exports.bs_html = tasks.bs_html
exports.build_js = tasks.build_js
exports.dev_js = tasks.dev_js
 

exports.default = gulp.parallel(
  exports.style,
  exports.html,
  exports.fonts,
  exports.img,
  exports.build_js,
  exports.bs_html,
  exports.watch,
)
 