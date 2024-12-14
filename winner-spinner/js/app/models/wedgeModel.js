define([
    "jquery",
    "backbone"
  ], function($, Backbone) {

    let patternIdxs = {};

    class WedgeModel extends Backbone.Model {

        defaults() {
            return {
                rank: 0,            // Rank of the results (modified) + width along the radius
                displayRank: 0,     // Rank of the results (displayed).

                name: "",   // Player's name
                color: {r: 0, g: 0, b: 0},
                
                isEnabled: true, // Set to false if struck through.
                
                // Along the radius
                offset: 0,
                offsetP: 0,
                
                // Width along the radius
                width: 0,   // === rank
                widthP: 0,

                radius:     0,  // Distance away from the center.
                thickness:  60, // Thickness of the wedge (along radius).
            }
        }

        initialize() {

            this.set("displayRank", this.get("rank"));
            
            // New: tweak the rank slightly (to give lower ranks more of a chance).
            this.set("rank", Math.pow(this.get("rank"), 1/1.7));

            this.set("radius", this.get("_parent").get("radius"));
            this.set("width", this.get("rank"));

            if (patternIdxs[this.get("rank")] === undefined) patternIdxs[this.get("rank")] = -1;
            patternIdxs[this.get("rank")]++;
            this.set("patternIdx", patternIdxs[this.get("rank")]);
        }

        update(offset, totalRank) {

            this.set("offset", offset);
            this.set("offsetP", offset/totalRank);
            this.set("widthP", this.get("rank")/totalRank);
        }

        strike() {
            this.set("isEnabled", false);
        }

        unstrike() {
            this.set("isEnabled", true);
        }

        isEnabled() {
            return this.get("isEnabled");
        }
    }

    return WedgeModel;
});