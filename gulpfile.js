var gulp = require("gulp");
var karma = require('karma');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var tslint = require("gulp-tslint");

/**
 * Compile the source and ship to dist folder
 */
gulp.task("compile:dist", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

/**
 * Run lint on source and spec
 */
gulp.task('lint', () => {
    return gulp.src(['src/**/*.ts', 'spec/**/*.ts'])
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
});
