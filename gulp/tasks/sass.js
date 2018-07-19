'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src('./source/style/app.scss')
        .pipe($.sassGlob())
        .pipe($.sourcemaps.init())
        .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
        .pipe($.autoprefixer({ browsers: $.config.autoprefixerConfig }))
        .pipe($.cssunit({ type: 'px-to-rem', rootSize : 16}))
        .pipe($.sourcemaps.write())
        .pipe($.gulp.dest($.config.root + '/assets/css'))
        .pipe($.browserSync.stream());
  })
};
