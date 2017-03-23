SystemJS.config({
    packages: {
        "node_modules/core-js": {
            main: 'index.js',
            format: 'cjs',
            defaultExtension: 'js'
        }, ".": {
            defaultExtension: 'js'
        }
    }
});