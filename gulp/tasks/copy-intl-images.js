import gulp from 'gulp';
import { paths } from '../config/paths.js';

export const copyIntlImages = () => {
  return gulp.src('node_modules/intl-tel-input/build/img/*')
    .pipe(gulp.dest(`${paths.base.build}/img`)); // Измените путь назначения, если нужно
};
