/**
 * main-router.js
 * 
 * Monitors for changes to the URL (not necessary for the Edge Wrapper)
 * and serves as an entry point into the page.
 */
define([
    "jquery",
    "backbone",
    "views/minigameView",
    "models/minigameModel",
    "views/playerEntryView"
], function($, Backbone, MinigameView, MinigameModel, PlayerEntryView) {

    var MainRouter = Backbone.Router.extend({

        initialize: function() {

            Backbone.history.start(); // Tells Backbone to start watching for hashchange events
        },

        /**
         * All Backbone Routes
         */
        routes: {

            /**
             * When there is no hash on the url, the home method is called
             * 
             * This will always get called, even if the URL contains a # (in which case, the # specific route gets called afterwards). - MP
             */
            "": "index",

            "*path": "" // Default route (go to this if invalid hash provided). Should be included last.
        },

        /**
         * Initialize Edge Wrapper here.
         */
        index: function() {

            let playerEntryView = new PlayerEntryView({
                model: new Backbone.Model(),
                el: $(".player-entry")[0]
            });
            
            let minigameView = new MinigameView({
                model: new MinigameModel()
            });

            window.minigameView = minigameView;

            $("#minigame").append(
                minigameView.$el
            );
        }

    });

    return MainRouter;
});