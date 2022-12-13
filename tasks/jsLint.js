const gulp = require('gulp')
const eslint = require('gulp-eslint')

module.exports = function jsLint(){
  return gulp.src (['src/**/*.js']) 
    .pipe (eslint ({configFle:  '../.eslintrc '})) 
    .pipe(eslint.format())
}