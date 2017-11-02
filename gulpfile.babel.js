import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import rimraf from 'rimraf';
import path from 'path';

const plugins = loadPlugins();

const DEST = path.join(__dirname, '../futbudd-build');

import webpackConfig from './webpack.config';

gulp.task('webpack', ['clean'], (cb) => {
  webpack(webpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('popup-html', ['clean'], () => {
  return gulp.src('src/popup.html')
    .pipe(gulp.dest(DEST))
});

gulp.task('copy-manifest', ['clean'], () => {
  return gulp.src('src/manifest.json')
    .pipe(gulp.dest(DEST))
});

gulp.task('copy-image', ['clean'], () => {
  return gulp.src('src/icon.png')
    .pipe(gulp.dest(DEST))
});

gulp.task('copy-style', ['clean'], () => {
  return gulp.src('src/style.css')
    .pipe(gulp.dest(DEST))
});

gulp.task('clean', (cb) => {
  rimraf(DEST, cb);
});

gulp.task('copy', ['copy-manifest', 'copy-style', 'copy-image']);
gulp.task('build', ['copy', 'popup-html', 'webpack']);

gulp.task('watch', ['default'], () => {
  gulp.watch('src/**/*', ['build']);
});

gulp.task('default', ['build']);
