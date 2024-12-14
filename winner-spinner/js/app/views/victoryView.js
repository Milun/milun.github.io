define([
    "jquery",
    "backbone"
  ], function($, Backbone) {

    class VictoryView extends Backbone.View {

        events() {
        }

        initialize() {

            //console.log(this.model.get("winner"));
            //console.log(this.model.get("losers"));
        }

        fadeIn() {

            // Set the titles.
            this.$(".victory-firstplace").html(this.model.get("winner").get("name"));

            _.find(this.model.get("losers"), (e, i) => {
                this.$(".victory-secondplace:nth-child(" + (i+1) + ")").html(e.get("name"));  
                if (i > 4) return;
            })

            this.$(".victory-inner").addClass("active");
        }
    }

    return VictoryView;
});