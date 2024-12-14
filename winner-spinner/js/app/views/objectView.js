define([
    "jquery",
    "backbone"
  ], function($, Backbone) {
      
    let objects = [];
    
    // Timer
    let start;
    let lastTime;
    function step(timestamp) {
        if (start === undefined){
            start = timestamp;
            lastTime = timestamp;
        }

        const elapsed = timestamp - start;
        const delta = elapsed - lastTime;
        lastTime = elapsed;

        /*if (delta > 7.5) {
            console.log("Lag spike: " + delta);
        }*/

        _.each(objects, (obj) => {
            obj.draw(delta, elapsed);
        });

        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);

    // View
    class ObjectView extends Backbone.View {

        initialize() {
            objects.push(this);
            this.init();
        }

        init() {
            // Override this.
        }

        draw(delta, elapsed) {
            // Override this.
        }
    }

    return ObjectView;
});