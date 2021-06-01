const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const imagemin = require('gulp-imagemin');
const autoPrefixer = require('gulp-autoprefixer');

// const cssFiles = [
//   'src/css/*.css', 
//   'src/scss/*.scss'
// ];
gulp.task('copyHtml', function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('imageMin', () =>
  gulp.src('src/imgs/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/imgs'))
);

// gulp.task('fonts', () =>
//   gulp.src('src/fonts/Lato/*')
//     .pipe(concat('lato.ttf'))
//     .pipe(gulp.dest('dist/fonts'))
// );

gulp.task('sass', () =>
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer('last 8 versions'))
    .pipe(cleanCss())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())
);
gulp.task('css', () =>
  gulp.src('src/css/*.css')
    .pipe(cleanCss())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/css'))
);

gulp.task('jquery', () =>
  gulp.src('src/jquery/*.js')
    .pipe(uglify())
    .pipe(concat('jquery.js'))
    .pipe(gulp.dest('dist/js'))
);
gulp.task('iso', () =>
  gulp.src('src/iso/*.js')
    .pipe(concat('iso.js'))
    .pipe(gulp.dest('dist/js'))
);
gulp.task('scripts', () =>
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
);

gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: 'dist/'
    }
  });
  gulp.watch('src/sass/*.scss', gulp.series('sass'));
  gulp.watch('src/css/*.css', gulp.series('css'));
  gulp.watch('src/imgs/*', gulp.series('imageMin')).on('change', browserSync.reload);
  gulp.watch('src/*.html', gulp.series('copyHtml')).on('change', browserSync.reload);
  gulp.watch('src/jquery/*.js', gulp.series('jquery')).on('change', browserSync.reload);
  gulp.watch('src/iso/*.js', gulp.series('iso')).on('change', browserSync.reload);
  gulp.watch('src/js/*.js', gulp.series('scripts')).on('change', browserSync.reload);
});
gulp.task('default', gulp.series('copyHtml', 'imageMin', 'sass', 'css', 'jquery', 'iso', 'scripts', 'watch'));


