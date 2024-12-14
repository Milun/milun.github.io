define([
    "core",
    "jquery",
    "backbone",
    "models/wheelModel",
    "views/wheelView",
    "views/objectView",
    "views/victoryView"
  ], function(Core, $, Backbone, WheelModel, WheelView, ObjectView, VictoryView) {

    let CANVAS_SIZE = 700;
    let WEDGE_WIDTH = 80;

    // Colors for every tier.
    let COLORS = [
        "gold",
        "silver",
        "peru",
        "black",
        "brown",
        "green",
        "blue",
        "purple",
        "orange",
        "yellow"
    ]

    class MinigameView extends ObjectView {

        init() {

            // Shortcuts.
            this.canvas = this.$el[0];
            this.ctx = this.canvas.getContext("2d");
            this.$el.attr("width", 1000 + "px");
            this.$el.attr("height", CANVAS_SIZE + "px");

            window.canvas = this.canvas;
            window.ctx = this.ctx;

            window.playAudio = this.playAudio.bind(this);
            window.setLinkState = this.setLinkState.bind(this);

            this.listenTo(Core, "start", this.start);

            this.render();
        }

        className(){
            return ""
        }

        id(){
            return "canvas"
        }

        tagName() {
            return "canvas"
        }

        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        setLinkState(stateIdx) {
            
            let $link = $("#link");
            $link.removeClass("_1").removeClass("_2");
            $link.removeClass("_anim");

            let $arrow = $("#arrow");

            switch(stateIdx) {
                case 0:
                    break;

                case 1:
                    $link.addClass("_1");
                    break;

                // Shoot arrow
                case 2:
                    $link.addClass("_2");
                    
                    $arrow.hide(0);
                    $arrow.show(0);

                    $arrow.css("left", "");

                    $arrow.animate({
                        "left": "+=180" 
                    }, 50, "swing", () => {
                        $arrow.animate({
                            "left": "+=150"
                        }, 1368, "linear", () => {
                            $arrow.animate({
                                "left": "+=960"
                            }, 300, "linear");
                        });
                    });
                    /*setTimeout(() => {
                        $arrow.css("animation-duration", "10s"); // Greatly slow down the arrow for slowmo.
                    }, 20);*/
                    break;

                // Normal speed arrow
                case 3:
                    //$link.addClass("_2");
                    $arrow.css("animation-duration", "");
                    break;
            }

            //$link.show(0);
            _.debounce(() => {
                $link.addClass("_anim");
            })();
        }

        async start() {
            
            const skipIntro = false;

            // Intro
            // ---------------------------------------
            if (!skipIntro) {
                this.wheelView.playShuffleDance(this.getAudio("intro").duration*1000, 8);
                await this.playAudio("intro");
            }

            // Main
            // ---------------------------------------

            // Count how many rounds there will be.
            // To synchronize with the song, ensure there are always % 4 rounds.
            // New: add an additional round for the "finalround" jingle.
            let roundCount = this.wheelView.model.get("wedges").getEnabledWedgeCount() - 1; // -1 so it doesn't strike the last player.
            let fakeoutCount = (4 - (roundCount-1) % 4);
            roundCount += fakeoutCount;

            console.log("Number of rounds: " + roundCount);
            console.log("Number of fakeouts: " + fakeoutCount);

            // Randomly determine which rounds will be fakeout rounds.
            let fakeoutRounds = [];
            for (let i = 0; i < fakeoutCount; i++){
                let fakeoutRound;
                // Find a round to add a fakeout on that hasn't already been chosen.
                do {
                    fakeoutRound = Math.floor(Math.random()*(roundCount-1)); // The last round can't be a fakeout.
                } while (_.includes(fakeoutRounds, fakeoutRound));
                fakeoutRounds.push(fakeoutRound);
            }
            console.log("Fakeouts on index(es): " + fakeoutRounds.join(", "));

            let struckWedges = [];

            // Play through all the rounds.
            let audioIdx = 1;
            for (let i = 0; i < roundCount; i++){
                
                let finalRound = i == roundCount-1;

                let audioName = "" + audioIdx;
                if (finalRound) audioName = "finalround";

                console.log("Playing audio: " + audioName + ".mp3");

                this.playAudio(audioName);

                window.setLinkState(0);
                await this.wheelView.playSpin(this.getAudio(audioName).duration*1000, audioIdx, _.includes(fakeoutRounds, i), finalRound);
                window.setLinkState(3);

                // Record the wedge which was just struck.
                if (this.wheelView.struckWedge) {
                    struckWedges.push(this.wheelView.struckWedge);
                }

                // Whenever the end of the audios is reached, go back to a random verse.
                audioIdx++;
                if (audioIdx > 12) {
                    audioIdx -= 4 * (Math.floor(Math.random() * 3) + 1);
                }
                
                //this.wheelView.model.strikeRandomWedge();
            }

            let winnerWedge = window.wedges.find((wedgeModel) => {
                return wedgeModel.get("isEnabled");
            });

            // Set up the victory view.
            let vv = new VictoryView({
                model: new Backbone.Model({
                    winner: winnerWedge,
                    losers: struckWedges.reverse()
                }),
                el: $(".victory")[0]
            })

            await this.sleep(500);

            //this.playAudio("outro");
            this.playAudio("congratulations");

            vv.fadeIn();

            /*_.debounce(() => {
            alert("CONGRATULATIONS " + window.wedges.find((wedgeModel) => {
                return wedgeModel.get("isEnabled");
            }).get("name") + "!\n\nAND THANK YOU EVERYONE FOR PLAYING! I HOPE TO SEE IN ANOTHER TOURNEY SOON!\n\n- Milun");
            })();*/
        }

        async loadAudio(filename) {

            let $audio = $("<audio>", {
				preload: "auto",
				controls: false,
				loop: false,
                autoplay: false,
                name: filename
            });
            
            $audio[0].mozPreservesPitch = false;
            //$audio[0].playbackRate = 0.5;

            return new Promise(resolve => {
                
                $("body").append($audio);
                $audio.append($("<source>", {
                    src: "assets/audio/" + filename + ".mp3",
                    type: "audio/mpeg"
                }));

                $audio[0].addEventListener("canplaythrough", function(){
                    resolve();
                });

                $audio[0].volume = 0.5;
            });
        }

        getAudio(filename) {
            return $("[name='" + filename + "']")[0];
        }

        async playAudio(filename, earlyCallback) {
            if (earlyCallback === undefined) earlyCallback = 50
            let a = this.getAudio(filename);
            a.play();
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, a.duration/a.playbackRate*1000 - earlyCallback); // - 50 added to fix the autoplay delay.
            });
        }

        async render() {

            // Start the game only once all audio has been loaded.
            await this.loadAudio("intro");
            await this.loadAudio("1");
            await this.loadAudio("1-hit");
            await this.loadAudio("2");
            await this.loadAudio("2-hit");
            await this.loadAudio("3");
            await this.loadAudio("3-hit");
            await this.loadAudio("4");
            await this.loadAudio("4-hit");
            await this.loadAudio("4");
            await this.loadAudio("4-hit");
            await this.loadAudio("5");
            await this.loadAudio("5-hit");
            await this.loadAudio("6");
            await this.loadAudio("6-hit");
            await this.loadAudio("7");
            await this.loadAudio("7-hit");
            await this.loadAudio("8");
            await this.loadAudio("8-hit");
            await this.loadAudio("9");
            await this.loadAudio("9-hit");
            await this.loadAudio("10");
            await this.loadAudio("10-hit");
            await this.loadAudio("11");
            await this.loadAudio("11-hit");
            await this.loadAudio("12");
            await this.loadAudio("12-hit");
            await this.loadAudio("finalround");
            await this.loadAudio("finalround-hit");
            await this.loadAudio("congratulations");
            await this.loadAudio("outro");
            await this.loadAudio("lucky");
        }

        initWheel() {

            this.wheelView = new WheelView({
                model: new WheelModel({
                    radius: (Math.min(window.canvas.width, window.canvas.height) / 2) * 0.6
                })
            });

            return this.wheelView;
        }

        /**
         * Percent: 0 - 1
         * @param {Float} percent 
         */
        percentToRad(percent) {
            return percent * 360 * Math.PI/180;
        }

        draw(delta) {

            // Clear the canvas
            window.ctx.clearRect(0, 0, window.canvas.width, window.canvas.height);
        }
    }

    return MinigameView;
});