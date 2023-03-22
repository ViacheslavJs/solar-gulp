export const fontawesome = () => {
  return app.gulp.src(app.path.src.fontawesome)
    .pipe(app.gulp.dest(app.path.build.fontawesome));
}
