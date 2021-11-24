const { src, dest, series } = require('gulp');
const gulp = require('gulp');
const del = require('del');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const cache = require('gulp-cache');
const cheerio = require('gulp-cheerio');

const woff = require("gulp-ttf2woff");
const woff2 = require("gulp-ttftowoff2");

const pugHTML = require('gulp-pug');
const formatHTML = require('gulp-format-html');
const validationBEM = require('gulp-html-bem-validator');

const sass = require('gulp-sass')(require('sass'));
const sourcemap = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const combCSS = require('gulp-csscomb');

const uglify = require('gulp-uglify');

const imagemin = require('gulp-image');
const svgstore = require('gulp-svgstore');

const server = require("browser-sync").create();

function clean(done) {
  return del('build').then(() => {
    done()
  })
}

function fonts(done) {
  src('src/fonts/*.ttf')
    .pipe(woff())
    .pipe(dest('build/fonts'))
  src('src/fonts/*.ttf')
    .pipe(woff2())
    .pipe(dest('build/fonts'))
  done();
}

function html() {
  return src('src/html/pages/*.pug')
    .pipe(plumber())
    .pipe(pugHTML())
    .pipe(formatHTML())
    .pipe(validationBEM())
    .pipe(dest('build'))
}

function css() {
  return src('src/css/*.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS({ sourceMap: true, level: { 2: { all: true } } } ))
    .pipe(combCSS())
    .pipe(sourcemap.write())
    .pipe(dest('build/css'))
}


function cssLib() {
  return src('src/css/lib/*.css')
    .pipe(dest('build/css/lib'))
}

function js() {
  return src('src/js/*.js')
    .pipe(plumber())
    .pipe(dest('build/js'))
    .pipe(sourcemap.init())
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(sourcemap.write())
    .pipe(dest('build/js'))
}

function jsLib() {
  return src('src/js/lib/*.js')
    .pipe(dest('build/js/lib'))
}

function img() {
  return src('src/img/**/*.{gif,png,jpg,jpeg,ico}')
    .pipe(cache(imagemin()))
    .pipe(dest('build/img'))
}

function svg() {
  return src('src/img/svg/**/*.svg')
    .pipe(dest('build/img/svg'))
    .pipe(cheerio({
      run: ($) => {
        $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(dest('build/img/svg'))
}

function files() {
  return src('src/files/**/*')
    .pipe(dest('build/files'))
}

function reload(cb) {
  server.reload()
  cb()
}

function serve(cb) {
  server.init({
    server: 'build',
    notify: false,
    open: true,
    ui: false,
    cors: true
  })
  gulp.watch('src/html/**/*.pug', gulp.series(html, reload))
  gulp.watch('src/css/**/*.scss', gulp.series(css))
  gulp.watch('src/css/lib/**/.css', gulp.series(cssLib, reload))
  gulp.watch('src/js/*.js', gulp.series(js, reload))
  gulp.watch('src/js/lib/**', gulp.series(jsLib, reload))
  gulp.watch('src/fonts', gulp.series(fonts, reload))
  gulp.watch('src/img/**/*.{gif,png,jpg,jpeg,ico}', gulp.series(img, reload))
  gulp.watch('src/img/svg/*.svg', gulp.series(svg, reload))
  gulp.watch('src/files/**/*', gulp.series(files, reload))
  return cb()
}

exports.html = html
exports.css = css
exports.fonts = fonts
exports.js = js
exports.img = img
exports.svg = svg

exports.build = series(clean, fonts, html, css, cssLib, js, jsLib, img, svg);
exports.start = series(clean, fonts, html, css, cssLib, js, jsLib, img, svg, serve);
