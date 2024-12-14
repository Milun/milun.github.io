/**
 * 
 */
define([
    "jquery",
    "backbone",
    "views/objectView"
], function ($, Backbone, ObjectView) {

    class CoreView extends ObjectView{

        events() {
            return {
                "click" : "onClick"
            }
        }

        initialize(){
            this.render();
        }

        render(){
            this.$el.html('<button class="btn__start">START</button>');
        }

        onClick(){
            this.model.reset();
            this.$(".btn__start").remove();
        }

        draw(delta, elapsed) {
            // Override this.
            this.model.set("gameTime", this.model.get("gameTime") + delta);
        }
    }

    class Core extends Backbone.Model{

        defaults() {
            return {
                gameTime: 0 // How long the game has been running.
            }
        }

        reset() {
            this.set("gameTime", 0);
            this.trigger("reset");
            this.trigger("start");
        }
    }
    
    let core = new Core();
    let coreView = this.$("body").prepend(new CoreView({model: core}).$el);

    return core;
});
