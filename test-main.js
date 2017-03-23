var allTestFiles = []
var TEST_REGEXP = /(spec|test)\.js$/i

// This is required to report spec status to Karma from SystemJS
__karma__.loaded = function () { };

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/$/ig, '')
    allTestFiles.push(normalizedTestModule);
  }
})

SystemJS.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseURL: '/base'
})

System.import('system.config.js').then(function () {
  Promise.all(
    // Loading test files
    allTestFiles.map(function (moduleName) {
      return System.import(moduleName);
    })
  ).then(__karma__.start, __karma__.error);
});