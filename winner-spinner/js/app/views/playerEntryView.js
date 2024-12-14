define([
    "jquery",
    "backbone"
  ], function($, Backbone) {

    // How many players achieve each rank.
    const ranks = {
        "1": 1,
        "2": 1,
        "3": 1,
        "4": 1,
        "5": 2,
        "7": 2,
        "9": 4,
        "13": 4,
        "17": 8,
        "25": 8
    }

    class PlayerEntryView extends Backbone.View {

        events() {
            return {
                "keyup .player-entry-input" : "onInputKeyUp",
                "click .player-entry-btn" : "onBtnClick"
            }
        }

        initialize() {

            this.setUpViewData();
            this.setUpModelData();

            /*_.debounce(() => {
                this.inputDebugValues();
            }, 100)();*/
        }

        setUpEventListeners() {
            
        }

        setUpModelData() {
            
        }

        inputDebugValues() {
            this.addPlayer("debug1");
            this.addPlayer("debug2");
            this.addPlayer("debug3");
            this.addPlayer("debug4");
            this.addPlayer("debug5");
            /*this.addPlayer("debug6");
            this.addPlayer("debug7");
            this.addPlayer("debug8");
            this.addPlayer("debug9");
            this.addPlayer("debug10");
            this.addPlayer("debug11");
            this.addPlayer("debug12");
            this.addPlayer("debug13");
            this.addPlayer("debug14");
            this.addPlayer("debug15");
            this.addPlayer("debug16");*/
            this.isDebugValues = true;
            this.onBtnClick();
        }

        setUpViewData() {
            this.players = [];
        }

        getPlayerRank(playerIdx) {

            let rank = "";
            let c = 0;
            _.find(ranks, (val, key) => {
                c += val;
                if (c > playerIdx) {
                    rank = key;
                    return true;
                }
            });

            return rank;
        }

        addPlayer(playerName) {

            let rank = this.getPlayerRank(this.players.length);

            this.players.push({
                name: playerName,
                rank: parseInt(rank)
            });

            this.$(".player-entry-playerlist").append("<div class='player-entry-player'><strong>" + rank + ".</strong> " + playerName + "</div>");

            window.players = this.players;

            this.updateRank();
        }

        updateRank() {
            this.$(".player-entry-input-rank").text("Rank: #" + this.getPlayerRank(this.players.length));
        }

        onInputKeyUp(event) {
            
            if (event.which === 13) { // Enter

                let val = event.currentTarget.value;
                if (!val.trim()) return; // Don't submit blank player names.

                this.addPlayer(val.trim());
                event.currentTarget.value = "";
            }
        }

        onBtnClick() {

            if (this.players.length <= 1) {
                alert("The Smash Winner Spinner needs at least 2 players to run.");
                return;
            }

            if (this.isDebugValues || confirm('Are you sure you want to proceed? (There\'s no way back after you click "Yes".')) {

                let wheelModel = window.minigameView.initWheel().model;
                this.remove();

                // Simulate games if in debug.
                if (this.isDebugValues) {
                    _.debounce(() => {
                        wheelModel.simulateGames(1000);
                    }, 100)();
                }

            } else {
            
            }
        }
    }

    return PlayerEntryView;
});