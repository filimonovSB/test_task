const {
  src,
  dest,
} = require('gulp') 
 
module.exports = function fonts() { 
  return  src( 'src/img/*.* ')
    .pipe(dest('build/img'))
}