/*
Team Moose Kickers :: Gordon Mo, Hui Wang 
SoftDev pd7
K31 -- canvas based JS animation
2023-04-25t
JavaScript canvas work
*/

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
    clear()
    ctx.beginPath()
    ctx.arc(c.width/2, c.height/2, radius, 0, 2 * Math.PI);
    ctx.stroke()
    ctx.fill()
    if(growing){
        window.cancelAnimationFrame(requestID)
        radius += 1;  
    }
    else{
        window.cancelAnimationFrame(requestID)
        radius -= 1;
    }

    if(radius == c.width/2){
        growing = false;
    }
    else if(radius <= 0){
        growing = true;
    }

    requestID = window.requestAnimationFrame(drawDot);
}

var stopIt = () =>{
    window.cancelAnimationFrame(requestID)
}

dotButton.addEventListener( "click", drawDot);
stopButton.addEventListener( "click", stopIt);