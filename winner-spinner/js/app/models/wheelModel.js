define([
    "jquery",
    "backbone",
    "models/wedgeModel",
    "collections/wedgeCollection"
  ], function($, Backbone, WedgeModel, WedgeCollection) {

    let COLORS = [
        "#ffd700",
        "#c0c0c0",
        "#cd853f",
        "#2d2d2d",
        "#cd3f3f",
        "#60cd3f",
        "#3f5acd",
        "#9d3fcd",
        "#eb9d21",
        "#f7f95a",
        "#b5f2f7"
    ]

    class WheelModel extends Backbone.Model {

        defaults() {
            return {
                radius:     50,   
                wedges:     undefined,  // Collection.
                rotationP:   0,          // Current rotation of the wheel (rotates as the game runs).
                /*rotationPDraw:   0,      // Drawn rotation of the wheel.

                rotationPSpeed: 0,      // Added to the wheel's rotationP each frame.
                rotationPSpeedTarget: 0, // rotationPSpeed lerps towards this each frame.*/

                //rotationPDraw: 0         // Lerps towards rotation.
            }
        }

        initialize() {
            this.populate();
        }

        populate(){

            let models = [];
            models = window.players;

            /*models.push({name: "Star", rank: 1});
            models.push({name: "BakerAU", rank: 2});
            models.push({name: "Jetfantastic", rank: 3});
            models.push({name: "Naga", rank: 4});
            models.push({name: "Mask1n", rank: 5});
            models.push({name: "Milun", rank: 5});
            models.push({name: "Angla", rank: 7});
            models.push({name: "lewdelli", rank: 7});
            models.push({name: "Kenz", rank: 9});
            models.push({name: "Kitoro", rank: 9});
            models.push({name: "RoyinoZ", rank: 9});
            models.push({name: "Timic83", rank: 9});
            models.push({name: "Jerry Swan", rank: 13});
            models.push({name: "Joker Main", rank: 13});
            models.push({name: "nrc196", rank: 13});
            models.push({name: "WolfRagnell", rank: 13});
            models.push({name: "chimps", rank: 17});
            models.push({name: "Layth_", rank: 17});
            models.push({name: "Stawz", rank: 17});*/

            let c = new WedgeCollection();
            this.set("wedges", c);

            window.wedges = c;

            let colorIdx = -1;
            let lastRank = -1;
            _.each(models, (m) => {

                if (lastRank != m.rank) {
                    lastRank = m.rank;
                    colorIdx++;
                }

                m._parent = this;
                m.color = COLORS[colorIdx];

                c.push(new WedgeModel(m));
            });

            console.log("All ranks combined: " + c.getTotalRank());
            
            //this.updateCollection();

            // Shuffle the collection.
            //c.reset(c.shuffle(), {silent:true});

            //console.log(c);
        }

        // Debug: rapid fire simulation.
        simulateGames(gameCount) {

            let winners = {};
            let wedges = this.get("wedges");

            for (let g = 0; g < gameCount; g++) {

                let winner = undefined;
                for (let i = 0; i < wedges.length; i++) {
                    winner = this.strikeRandomWedge();
                }

                let i = winner.get("name");
                if (winners[i] === undefined) winners[i] = {
                    rank: winner.get("rank"),
                    displayRank: winner.get("displayRank"),
                    name: winner.get("name"),
                    wins: 0
                };
                winners[i].wins += 1;
                wedges.enableAllItems();
                this.randomize();
            }

            let winnerArray = [];
            _.each(winners, (winner) => {
                winnerArray.push(winner);
            });
            winnerArray = _.sortBy(winnerArray, ["rank"]);
            _.each(winnerArray, (winner) => {
                console.log("[" + winner.displayRank + "] " + winner.name + ": " + winner.wins);
            });
        }

        getRandomStrikeTarget(){

            let wedges = this.get("wedges");
            if (wedges.getEnabledWedgeCount() <= 0)
                throw "Cannot strike random wedge when all wedges in the wheel have already been struck";

            // Find the wedge that this would point to.
            let targetWedge = undefined;
            let targetPercent = 0;
            do {
                // Choose a random area on the wheel to strike.
                targetPercent = Math.random();
                targetWedge = wedges.getWedgeAtPercent(targetPercent);

            } while (!targetWedge.isEnabled()); // Repeat until an enabled wedge is found.

            return {
                wedge: targetWedge,
                percent: targetPercent
            }
        }

        randomize(){
            this.get("wedges").randomize();
        }

        /**
         * Strike a random ENABLED wedge in the wheel.
         * Disabled Wedges will never be struck.
         */
        strikeRandomWedge(){

            let target = this.getRandomStrikeTarget();

            target.wedge.strike();

            return target.wedge; // Return the struck wedge.
        }
    }

    return WheelModel;
});