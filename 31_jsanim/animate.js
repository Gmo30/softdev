var c = document.getElementById("playground");

var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");

var ctx = c.getContext("2d");

ctx.fillStyle = "blue";

var requestID;

var clear = (e) => {
    ctx.clearRect(0,0, c.width, c.height)
};

var radius = 0;
var growing = true ;

var drawDot = () => {
    clear
    ctx.beginPath()
    ctx.arc(c.width/2, c.height/2, radius, 0, 2 * Math.PI);
    ctx.stroke()
    if(growing){
        radius += 1;  
    }

    globalID = window.requestAnimationFrame(drawDot);
}

var stopIt = () =>{
    window.cancelAnimationFrame(globalID)
}

dotButton.addEventListener( "click", drawDot);
stopButton.addEventListener( "click", stopIt);