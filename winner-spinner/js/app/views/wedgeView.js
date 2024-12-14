define([
    "jquery",
    "backbone",
    "views/objectView"
  ], function($, Backbone, ObjectView) {

    // https://jonlabelle.com/snippets/view/javascript/lighten-and-darken-colors-in-javascript
    function LightenDarkenColor(colorCode, amount) {
        var usePound = false;
     
        if (colorCode[0] == "#") {
            colorCode = colorCode.slice(1);
            usePound = true;
        }
     
        var num = parseInt(colorCode, 16);
     
        var r = (num >> 16) + amount;
     
        if (r > 255) {
            r = 255;
        } else if (r < 0) {
            r = 0;
        }
     
        var b = ((num >> 8) & 0x00FF) + amount;
     
        if (b > 255) {
            b = 255;
        } else if (b < 0) {
            b = 0;
        }
     
        var g = (num & 0x0000FF) + amount;
     
        if (g > 255) {
            g = 255;
        } else if (g < 0) {
            g = 0;
        }
     
        return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    }

    class WheelView extends ObjectView {

        init() {

            this.setUpViewData();

            this.listenTo(this.model, "change:isEnabled", (model, isEnabled) => {
                this.$el.toggleClass("is-disabled", !isEnabled);
                //this.strike();
            });
            this.render();
            this.playerCanvas = this.$(".player-canvas")[0];
        }

        className(){
            return "player";
        }

        setUpViewData() {

            // Used for the animation when the wedge is struck out.
            this.strikeVal = 0;
            this.strikeValMax = 150;
        }

        initWedgeViews() {
            
        }

        draw(delta, elapsed) {

            if (!this.playerImg) return; // Wait for the player images to be created.

            let isEnabled = this.model.get("isEnabled");
            if (isEnabled) {
                this.strikeVal -= delta * 0.25; // Move faster when being unstruck vs. struck. 
                if (this.strikeVal < 0) this.strikeVal = 0;
            }
            else {
                this.strikeVal += delta * 0.1;
                if (this.strikeVal > this.strikeValMax) this.strikeVal = this.strikeValMax;
            }
            //console.log(this.strikeVal);

            let ctx = window.ctx;

            // Get the exact center of the canvas (and the center of the circle).
            let cX = window.canvas.width/2;
            let cY = window.canvas.height/2;
            let radius = this.model.get("radius") + this.strikeVal;

            let s = this.percentToRad(this.strikeVal) * 0.001 * this.model.get("widthP");
            let wedgeSize = this.percentToRad(this.model.get("widthP")) - s*2;
            let wedgeOffset = this.percentToRad(this.model.get("offsetP") + this.model.get("_parent").get("rotationP")) + s;

            //radius += Math.cos(elapsed*0.001) * 40;

            // Draw the wedge
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(cX, cY);
            ctx.arc(cX, cY, radius, wedgeOffset, wedgeOffset + wedgeSize, false);
            ctx.arc(cX, cY, radius + this.model.get("thickness"), wedgeOffset + wedgeSize, wedgeOffset, true);
            ctx.closePath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = "white";
            ctx.stroke();

            /*var img = document.getElementById("pattern1");
            var pat = ctx.createPattern(img, "repeat");
            ctx.fillStyle = pat;*/


            //if (this.model.get("isEnabled")) {
             // Fade out if being striked.
            //ctx.fillStyle = this.createPattern(this.model.get("color"), this.model.get("patternIdx")); //this.getPattern(this.model.get("patternIdx"));

            ctx.globalAlpha = 1 - (this.strikeVal / this.strikeValMax);
            ctx.fillStyle = this.getPattern(this.model.get("patternIdx"));
                
            //}
            //else {
                //ctx.fillStyle = "#FFFFFF";
            //}
            
            ctx.fill();
            ctx.globalAlpha = 1;
            
            ctx.restore();
            
            let tier = 0;
            let lastRank = 0; // Each time the rank changes, increment the tier.
        }

        getPattern(patternIdx) {
            // If 0, return solid fill.
            if (patternIdx == 0) {
                return this.model.get("color");
            }

            // Otherwise, return the canvas that has this wedge's pattern.
            return window.ctx.createPattern(this.playerImg, "repeat");
        }

        createPattern(primaryColor, patternIdx) {
            
            let c = this.playerCanvas;
            let ctx = c.getContext("2d");

            // Fill the base color.
            ctx.beginPath(); // Important! If not included, causes lag.
            ctx.rect(0, 0, c.width, c.height);
            ctx.fillStyle = primaryColor;
            ctx.fill();

            //return primaryColor;

            let secondaryColor = LightenDarkenColor(primaryColor, -80);

            // Draw the pattern over it.
            switch (patternIdx) {
                case 0:
                    //return primaryColor;
                    break;

                case 1:
                    this.drawPattern0(ctx, secondaryColor);
                    window.ctx.createPattern(c, "repeat");
                    break;

                case 2:
                    this.drawPattern1(ctx, secondaryColor);
                    window.ctx.createPattern(c, "repeat");
                    break;
                    
                case 3:
                    this.drawPattern2(ctx, secondaryColor);
                    window.ctx.createPattern(c, "repeat");
                    break;

                default:
                    break;
            }

            // https://stackoverflow.com/questions/18008473/convert-html5-canvas-to-img-element

            // Convert the canvas to an img.
            let dataUrl = c.toDataURL();
            let imageFoo = document.createElement('img');
            imageFoo.src = dataUrl;
            imageFoo.className = "player-img";

            // Style your image here
            imageFoo.style.width = c.width;
            imageFoo.style.height = c.height;

            // After you are done styling it, append it to the BODY element
            $(this.playerCanvas).replaceWith(imageFoo);

            this.playerImg = this.$(".player-img")[0];
        }

        // Stripes.
        drawPattern2(ctx, patternColor) {
            
            const spacing = 5;
            let width = ctx.canvas.width;
            let height = ctx.canvas.height;
            let v = Math.max(width, height);

            for (var i = -v; i < v; i+= spacing) {
                ctx.beginPath();
                ctx.moveTo(i-2, -2);
                ctx.lineTo(i+v + 2, v + 2);
                ctx.lineWidth = 2;
                ctx.strokeStyle = patternColor;
                ctx.stroke();
            }
        }

        // Grid
        drawPattern1(ctx, patternColor) {
            
            const spacing = 10;
            let width = ctx.canvas.width;
            let height = ctx.canvas.height;
            let v = Math.max(width, height);

            for (var i = -v; i < v; i+= spacing) {
                ctx.beginPath();
                ctx.moveTo(i-2, -2);
                ctx.lineTo(i+v + 2, v + 2);
                ctx.lineWidth = 2;
                ctx.strokeStyle = patternColor;
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(i+v+2, -2);
                ctx.lineTo(i - 2, v + 2);
                ctx.lineWidth = 2;
                ctx.strokeStyle = patternColor;
                ctx.stroke();
            }
        }

        // Crosses (lags, most likely due to having to draw so much).
        drawPattern0(ctx, patternColor) {
            
            const spacing = 24;
            const size = 7;

            let width = ctx.canvas.width;
            let height = ctx.canvas.height;

            for (var i = 2; i < width; i+= spacing) {
                for (var j = 2; j < height; j+= spacing) {
                    ctx.beginPath();
                    ctx.moveTo(i, j);
                    ctx.lineTo(i + size, j + size);
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = patternColor;
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(i + size, j);
                    ctx.lineTo(i, j + size);
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = patternColor;
                    ctx.stroke();
                }
            }

            /*for (var i = -width; i < width; i+= spacing) {
                ctx.beginPath();
                ctx.moveTo(i-2, -2);
                ctx.lineTo(i+width + 2, height + 2);
                ctx.lineWidth = 2;
                ctx.strokeStyle = patternColor;
                ctx.stroke();
            }*/
        }

        // If struck, slowly fly out.
        playStrike() {
            this.model.set("radius", this.model.get("radius") + 1);
        }

        render(delta) {

            // Set the color.
            this.$el.css({
                "background-color": this.model.get("color")
            });

            // Add a canvas as the background color for each player.
            let $inner = $("<canvas class='player-canvas'></canvas><div class='player-inner'><div class='rank'>" + this.model.get("displayRank") + "</div><div class='name'>" + this.model.get("name") + "</div></div>");
            this.$el.append($inner);

            _.debounce(() => {

                let $canvas = this.$(".player-canvas");
                let m = Math.max(this.$el.outerWidth(), this.$el.outerHeight());
                $canvas.attr("width", m + "px");
                $canvas.attr("height", m + "px");
                this.createPattern(this.model.get("color"), this.model.get("patternIdx"));
            })();
        }

        /**
         * Percent: 0 - 1
         * @param {Float} percent 
         */
        percentToRad(percent) {
            return percent * 360 * Math.PI/180;
        }
    }

    return WheelView;
});