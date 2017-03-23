module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        frameworks: ["karma-typescript", "jasmine"],

        // list of files / patterns to load in the browser
        files: [
            // Polyfills
            "node_modules/core-js/client/shim.js",

            // System.js for module loading
            'node_modules/systemjs/dist/system.src.js',

            // SystemJS config file
            { pattern: "./system.config.js", included: false },

            // Source and test files
            { pattern: "src/**/*.ts", included: false },
            { pattern: "test/**/*.ts", included: false },

            // asynchronous file configurations. This file is available in the repository https://github.com/syncfusion/cd-typescript-seed
            'test-main.js',
        ],

        preprocessors: {
            "**/*.ts": ["karma-typescript"],
        },

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ["PhantomJS"],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots']
    })
};