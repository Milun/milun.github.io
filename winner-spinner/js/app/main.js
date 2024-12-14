/**
 * 
 */
define([
    // Include all router specific JavaScript here (or inside of the main-router). 
    "jquery",
    "backbone",
    "app/routers/main-router",
    "Backbone.validateAll",
    "core"
], function ($, Backbone, MainRouter) {

    new MainRouter();
});
