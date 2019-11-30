const gulp = require('gulp');
const watch = require('gulp-watch');
//For Sass
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const livereload = require('gulp-livereload');

//For Css
const rename = require('gulp-rename');
const gulpminifycss = require('gulp-minify-css');
const plumber = require('gulp-plumber');
const remember = require('gulp-remember');

//For Js
const rigger = require('gulp-rigger');
const uglify = require('gulp-uglify');
const notify = require('gulp-notify');
const newer = require('gulp-newer'); /*  Plugin look for new changes in files */

/* Plugin for Images */
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

const clean = require('gulp-clean'); /* Plugin delete some folder, content */
const browserSync = require("browser-sync");
const reload = browserSync.reload;

/*Task for webserver*/
const config = {
  server: {
      baseDir: "build"
  },
  tunnel: false,
  host: 'localhost',
  port: 9000,
  logPrefix: "EvgenTitov"
};

gulp.task('webserver', function () {
  browserSync(config);
});

gulp.task('html', function() {
  return gulp.src('src/index.html')
  .pipe(gulp.dest('build'))
  .pipe(reload({stream: true}));
});

gulp.task('js', function() {
  gulp.src('src/js/script.js')
  .pipe(gulp.dest('build/js'))
  .pipe(reload({stream: true}))
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/js/**/*.js', ['js']);
});

gulp.task('build', ['html', 'js']);
gulp.task('default', ['build', 'webserver', 'watch']);

/* Task Clean (delete folder [build/]) */
gulp.task('clean', function () {
  return gulp.src('build', {read: false})
      .pipe(clean());
});