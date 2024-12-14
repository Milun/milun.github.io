define([
    "jquery",
    "backbone"
  ], function($, Backbone) {

    class WedgeCollection extends Backbone.Collection {

      /**
       * Shuffles the collection + updates the WedgeModel values.
       */
      randomize() {

        this.reset(this.shuffle(), {silent:true});
        this.repopulate();
      }
    
      enableAllItems(){
        this.each((model) => {
          model.set("isEnabled", true);
        });
      }

      getEnabledWedgeCount(){
        let c = 0;
        this.each((wedge) => {
          if (wedge.isEnabled()) c++;
        });

        return c;
      }

      // Returns the total sum of all ranks.
      getTotalRank() {
        let totalRank = 0;
        this.each((wedge) => {
          totalRank += wedge.get("rank");
        });
        return totalRank;
      }

      /**
       * Refreshes the values in the wedges
       */
      repopulate() {

        // Start counting from 0.
        let totalRank = this.getTotalRank();

        // Update wedges.
        let offset = 0;
        this.each((wedge) => {

          wedge.update(offset, totalRank);
          offset += wedge.get("width");
        });
      }

      getWedgeAtPercent(percent) {
        
        let total = 0;

        return _.find(this.models, (model) => {

          // Add the percent width of the wedge to the count.
          total += model.get("widthP");

          // If the total passed over the percent, then this is the wedge hit.
          if (total >= percent) {
            return true;
          }
        });
      }
    }

    return WedgeCollection;
});