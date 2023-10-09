/**
 * The following script is run by an <iframe> in b-20. 
 */

(function(){

    var ctx;

    var WIDTH = 460;
    var HEIGHT = 340;

    var x = WIDTH/2;
    var y = HEIGHT/2;
    var r = 25;

    var dx = 1;
    var dy = -1.4;

    init();

    window.addEventListener('resize', onWindowResize);

    function onWindowResize() {
        WIDTH = window.innerWidth;
        ctx.canvas.width = WIDTH;
        document.getElementById("myCanvas").style.width = WIDTH;
    }

    function init()
    {
        document.body.style.marginLeft = "0";
        document.body.style.marginRight = "0";
        ctx = document.getElementById("myCanvas").getContext('2d');
        
        onWindowResize();
        setInterval(draw,10);
    }

    function draw()
    {
        ctx.clearRect(0,0,WIDTH+1,HEIGHT+1);
        
        ctx.beginPath();
        ctx.fillStyle="#3141d3";
        ctx.arc(x,y,r,0,Math.PI*2,true);
        ctx.closePath();
        
        ctx.fill();
        
        x+=dx;
        y+=dy;
        
        if ((x+r > WIDTH && dx > 0) || (x-r < 0 && dx < 0)) {dx = -dx;}
        if ((y+r > HEIGHT && dy > 0) || (y-r < 0 && dy < 0)) {dy = -dy;}
    }

})();

