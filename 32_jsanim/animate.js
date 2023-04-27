/*
Team Fluffy Yummy Goats :: Gordon Mo, Kevin Wang 
SoftDev pd7
K32 -- canvas based JS animation
2023-04-26
JavaScript canvas work
*/

var c = document.getElementById("playground");

var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");
var dvdButton = document.getElementById("buttonDVD");

var ctx = c.getContext("2d");

ctx.fillStyle = "blue";

var requestID;

var clear = (e) => {
    //e.preventDefault();
    ctx.clearRect(0,0, c.width, c.height)
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var dvdLogoSetup = function(){
    window.cancelAnimationFrame(requestID);

    var rectWidth = 90;
    var rectHeight = 60;


    var rectX = getRandomInt(c.width-rectWidth);
    var rectY = getRandomInt(c.height-rectHeight);

    var xVel = 1;
    var yVel = 1;

    var logo = new Image(rectWidth, rectHeight);
    logo.src = "logo_dvd.jpg";

    var dvdLogo = function(){
        ctx.clearRect(0,0,c.width,c.height);
        ctx.drawImage(logo,rectX,rectY,rectWidth,rectHeight);
        if(rectX <= 0 || rectX + rectWidth >= c.width){
            xVel *= -1;
        }
        if(rectY <= 0 || rectY + rectHeight >= c.height){
            yVel *= -1;
        }
        rectX += xVel;
        rectY += yVel;
        requestID = window.requestAnimationFrame(dvdLogo)
    }
    dvdLogo();
}
var radius = 0;
var growing = true ;

var drawDot = (e) => {
    clear(e) 
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
dvdButton.addEventListener("click", dvdLogoSetup);
stopButton.addEventListener( "click", stopIt);