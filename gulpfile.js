var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

gulp.task('default', function() {
  return gulp.src([
    'bower_components/jquery/dist/jquery.js',
    'bower_components/pickadate/lib/picker.js',
    'bower_components/pickadate/lib/picker.date.js',
    'bower_components/pickadate/lib/picker.time.js',
    'bower_components/pickadate/lib/legacy.js',
    'bower_components/semantic-ui/build/packaged/javascript/semantic.min.js',
    'bower_components/json2/json2.js,',
    'bower_components/underscore/underscore.js',
    'bower_components/backbone/backbone.js',
    'bower_components/marionette/lib/backbone.marionette.js',
    'bower_components/backbone.radio/build/backbone.radio.js',
    'javascripts/vendor/jquery.tablesort.min.js',
    'public/javascripts/**/*.js'
  ])
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'));
});

gulp.task('css', function() {
  return gulp.src([
    'bower_components/pickadate/lib/themes/default.css',
    'bower_components/pickadate/lib/themes/default.date.css',
    'bower_components/pickadate/lib/themes/default.time.css',
    'bower_components/semantic-ui/build/packaged/css/semantic.min.css',
    'public/stylesheets/style.css'
  ])
    .pipe(concat('bundle.css'))
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('public/dist'));
});