define([
    "jquery",
    "backbone",
    "models/wheelModel"
  ], function($, Backbone, WheelModel) {

    class MinigameModel extends Backbone.Model {

        defaults() {
            return {
                players: ""
            }
        }

        initialize() {
         
            //this.initPlayerArray();
            //new WheelModel();
        }

    }

    return MinigameModel;
});