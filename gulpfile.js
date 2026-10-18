const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const htmlclean = require('gulp-htmlclean');
const version = require('gulp-version-number');
const terser = require('gulp-terser');

// Compacta os arquivos js
gulp.task('js', function () {
  return gulp
    .src(['./public/js/main.js'])
    .pipe(
      terser({
        compress: true
      })
    )
    .pipe(gulp.dest('./public/js'));
});

// Compila os arquivos html
gulp.task('html', function () {
  return gulp
    .src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(
      htmlmin({
        removeComments: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      })
    )
    .pipe(
      version({
        append: {
          key: '_v',
          cover: 1,
          to: ['css', 'js', 'png', 'jpg', 'woff2']
        }
      })
    )
    .pipe(gulp.dest('./public'));
});

gulp.task('default', gulp.parallel('js', 'html'));
