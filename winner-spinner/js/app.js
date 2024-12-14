// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app:        '../app',
        views:      '../app/views',
        models:     '../app/models',
        collections:'../app/collections',

        core:       '../app/core',

        jquery:     'jquery-3.4.1.min',
        underscore: 'lodash',
        backbone:   'backbone'
    },
    shim: {

        // Backbone
        "backbone": {
  
           // Depends on underscore/lodash and jQuery
           "deps": ["underscore", "jquery"],
           // Exports the global window.Backbone object
           "exports": "Backbone"
        }
    },
    catchError: true
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs([
    'jquery',
    'app/main'
]);
