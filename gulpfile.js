var gulp = require("gulp");
var karma = require('karma');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var tslint = require("gulp-tslint");
var exec = require('child_process').execSync;

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
    return gulp.src(['src/**/*.ts', 'test/**/*.ts'])
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
});

gulp.task('version', () => {
    var releaseType = "patch";
    // Fetching last commit message
    var commitmsg = exec("git log -n 1 --format=%s").toString("utf8").replace(/\n/g, " ");

    // Looking for keyword "breaking-change" to mark this release as major
    if (/breaking-change/i.test(commitmsg)) {
        releaseType = "major";
    }
    // Looking for prefix "feature" to mark this release as minor
    else if (commitmsg.split(":", 2)[0].toLowerCase() == "feature") {
        releaseType = "minor";
    }

    // Executing npm version command.
    exec(`npm version ${releaseType} --no-git-tag-version -m "${commitmsg}"`);

    // Committing the package.json
    exec(`git commit --no-verify package.json -m "ci-skip: version update"`);

    // Pushing the changes to current branch
    exec("git push --force");
});

gulp.task('publish:npm', ["version"], () => {
    // Executing npm publish command.
    exec("npm publish");
});