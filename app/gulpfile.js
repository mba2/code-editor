/*
*   FRONT-END BUILD 
*/

// BUILD VARIABLES
const STATIC_SERVER = true;
// ===============================


// REQUIRED MODULES
// ===============================
const gulp              = require('gulp');
const plumber           = require('gulp-plumber');
const staticServer      = require('static-server');
const livereload        = require('gulp-livereload');
const concat            = require('gulp-concat');
const minifyCss         = require('gulp-minify-css');
const autoprefixer      = require('gulp-autoprefixer');
const sourcemaps        = require('gulp-sourcemaps');
const postcss           = require('postcss');
const cssnano           = require('cssnano');
const sass              = require('gulp-sass');
const uglify            = require('gulp-uglify');
const babel             = require('gulp-babel');
const imagemin          = require('gulp-imagemin');
const pngQuant          = require('imagemin-pngquant');
const jpegRecompress    = require('imagemin-jpeg-recompress');
const del               = require('del');

// PATHS
// ===============================
const PATH = {
    INDEX   : 'src/public/index.html',
    IMAGES  : 'src/public/img/*.{png,jpeg,jpg}',
    CSS     : 'src/public/styles/**/*.css',
    SASS    : 'src/public/styles/**/*.scss',
    SCRIPTS : 'src/public/js/**/*.js',
};

// CLEAN PROCESS
// ===============================
gulp.task('clean', () => {
    return del.sync([
        './build'
    ]);
});

// COPY PROCESS
// ===============================
gulp.task('copy__html',() => {
    return gulp.src(PATH.INDEX)
                .pipe(plumber())
                .pipe(gulp.dest('build/public/'));
});

// IMAGE COMPRESSION PROCESS
// ===============================
gulp.task('images', () => {
    return gulp.src(PATH.IMAGES)
        	    .pipe(imagemin(
                    [
                        imagemin.gifsicle(),
                        imagemin.jpegtran(),
                        imagemin.optipng(),
                        imagemin.svgo(),
                        pngQuant(),
                        jpegRecompress(),
                    ]
                ))
                .pipe(gulp.dest('build/public/img'));
});

// STYLES PROCESS
// ===============================
gulp.task('styles', () => {
    let plugins = [
        cssnano()
    ];

    return gulp.src([PATH.CSS,PATH.SASS])
                .pipe(plumber())
                .pipe( sourcemaps.init() )
                .pipe(sass())
                .pipe(autoprefixer({
                    browsers : ['last 20 versions', 'IE 8'] 
                }))
                .pipe(concat('one.css'))
                .pipe( sourcemaps.write() )
                .pipe(gulp.dest('build/public/css'))
                .pipe(livereload());
});

// SCRIPTS PROCESS
// ===============================
gulp.task('scripts', () => {
    var options = {
        
    };
    
    return gulp.src(PATH.SCRIPTS)
                .pipe(plumber())
                .pipe( sourcemaps.init() )
                .pipe(babel({
                    presets: ['es2015']
                }))
                .pipe(uglify(options))
                .pipe( sourcemaps.write() )
                .pipe(gulp.dest('build/public/js'))
                .pipe(livereload());
});

//  STATIC SERVER PROCESS
// ===============================
gulp.task('static-server', () => {
    if(STATIC_SERVER) {
        var server = new staticServer({
            rootPath    : 'build/public',
            port        : 4000,
        });
        
        server.start( () => console.log('Server started at port: ' + server.port) ) ;
        
    }else console.log('The Static Server feature is currently disabled');
});

// WATCH PROCESS
// ===============================
gulp.task('watch', () => {
    // server.start();
    livereload.listen();
    // WATCH FOR SCRIPTS
    gulp.watch(PATH.SCRIPTS, ['scripts']);
    // WATCH FOR SCRIPTS
    gulp.watch(PATH.STYLES, ['styles']);
 
});

// DEFAULT TASK
gulp.task('default', 
                        [
                            'clean',
                            'copy__html',
                            'styles',
                            'scripts',
                            'images',
                            'static-server',
                            'watch',
                        ]
                    );
