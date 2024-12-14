define([
    "jquery",
    "backbone",
    "views/objectView",
    "views/wedgeView"
  ], function($, Backbone, ObjectView, WedgeView) {

    class WheelView extends ObjectView {

        init() {

            this.initWedgeViews();
            this.setUpModelData();
            this.setUpViewData();
        }

        setUpModelData() {
            this.model.set("rotationSpeedMulti", 1);
        }

        setUpViewData() {
            this.rotationSpeed = 0;
            //this.rotationFake = 0; // Slightly delayed the rotation drawing to make it look like it's "speeding up".
            //this.rotationFakeLerpMulti = 1;
        }

        initWedgeViews() {

            let $players = $("#players");
            _.each(this.model.get("wedges").models, (wedge) => {
                $players.append(
                    new WedgeView({
                        model: wedge
                    }).$el
                )
            });

            this.model.get("wedges").repopulate();
            //this.model.get("wedges").randomize();

            /*console.log("DEBUG CLICK ADDED! REMOVE BEFORE RELEASING!");
            $("body").on("click", () => {
                //this.model.strikeRandomWedge();
                this.model.set("rotationP", Math.random());
            });*/
        }

        // Randomize the rotation of the wheel in one direction.
        // Minimal additional rotation added to ensure the change is visible.
        randomizeRotation() {
            this.model.set("rotationP", this.model.get("rotationP") + Math.random()/4 + 0.05);
        }

        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        /**
         * Shuffle dance which plays at the start of the game.
         * @param {*} duration In milliseconds.
         * @param {*} steps 
         */
        async playShuffleDance(duration, steps){

            let sleepDuration = duration/steps;

            for (let i = 0; i < steps; i++) {
                await this.sleep(sleepDuration);
                if (i%2 == 0 && i !== steps-1) {
                    this.model.randomize();
                }
            }
        }

        /**
         * Chooses the target, plays a spinning animation to move it into place, then strikes it.
         * @param {*} duration 
         * @param {*} steps 
         */
        async playSpin(duration, i, isFakeout, isFinal) {

            const minWheelSpin = 0.25;

            let t = this.model.getRandomStrikeTarget();
            let wedge = t.wedge;
            let percent = t.percent;

            this.struckWedge = isFakeout ? null : wedge;

            console.log("%cAbout to strike: " + wedge.get("name"), "color: red;");
            
            // Make the wheel spin in such a way that it ends on the target percent.
            let curRotation = this.model.get("rotationP");
            let destRotation = Math.ceil(curRotation) + (1 - percent);
            
            // Have the wheel's spinning speed be similar to the speed of the music playing.
            //console.log((destRotation - curRotation) + " " + duration);
            let musicSpeed = Math.pow(6000/duration, 2) / 3 - 0.5;
            //console.log(musicSpeed);
            while (destRotation - curRotation < musicSpeed) {
                destRotation++;
            }
            if (destRotation - curRotation < minWheelSpin) {
                destRotation++;
            }
            if (isFinal) destRotation += 35;

            //if (destRotation - curRotation < minWheelSpin) destRotation += 1;

            // The wheel needs to spin exactly this much before the song ends.
            const wheelSync = 150;
            let totalRotation = destRotation - curRotation;
            let totalDuration = duration - wheelSync;
            let beatDuration = duration / 7;

            this.rotationSpeed = totalRotation/(totalDuration-(2/60));

            // On the last beat before striking the target, change Link's state.
            setTimeout(() => {
                window.setLinkState(1);
            }, totalDuration - beatDuration);

            await this.sleep(totalDuration);

            // Fade in the victory screen on last round.
            if (isFinal) $(".victory").fadeIn(2000);

            // Strike the target!
            // Fallback: ensure the wheel it properly rotated just in case.
            this.model.set("rotationP", destRotation);
            wedge.strike();

            // Have Link shoot the arrow.
            window.setLinkState(2);

            this.rotationSpeed /= 100; // Cause a "slowdown" effect.

            // Play the hit sound.
            if (!isFinal) {
                await window.playAudio("" + i + "-hit");
            }
            else {
                await window.playAudio("finalround-hit");
            }

            // If this was a fakeout, play the noise and re-enable the wedge after a slight delay.
            if (isFakeout) {
                //setTimeout(() => {
                this.rotationSpeed = 0;
                wedge.unstrike();
                $("#lucky").show();
                await window.playAudio("lucky");
                _.debounce(() => {
                    $("#lucky").hide();
                }, 750)();
                //}, 1100);
            }
        }

        draw(delta) {

            //this.rotationSpeed = (this.rotationSpeedTarget - this.rotationSpeed) * 
            this.model.set("rotationP", this.model.get("rotationP") + this.rotationSpeed * delta);

            
            //let rotation = this.model.get("rotationP");
            //let rotationDraw = this.model.get("rotationPDraw");

            /*this.model.set(
                "rotationPDraw", rotationDraw + (rotation - rotationDraw) * 0.005 * delta * this.model.get("rotationSpeedMulti")
            );*/

            /*let rotationPSpeed = this.model.get("rotationPSpeed");
            let rotationPSpeedTarget = this.model.get("rotationPSpeedTarget");
            this.model.set(
                "rotationPSpeed", rotationPSpeed + (rotationPSpeedTarget - rotationPSpeed) * 0.005 * delta
            );
            this.model.set("rotationPDraw", this.model.get("rotationPDraw") + this.model.get("rotationPSpeed") * delta * 0.01);*/

            //console.log(this.model.get("rotationP") + " " + this.model.get("rotationPDraw"));
        }
    }

    return WheelView;
});