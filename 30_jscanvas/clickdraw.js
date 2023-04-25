var c = document.getElementById("slate");

var ctx = c.getContext("2d");
ctx.fillStyle = "red"

var mode = "rect";

var toggleMode = function(e) {
    if (mode == "rect") {
        mode = "circle";
        bToggle.innerHTML = "rectangle";
    } else {
        mode = "rect";
        bToggle.innerHTML = "circle";
    }
}
var drawCircle = (e) => {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

var drawRect = (e) => {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    ctx.fillRect(mouseX, mouseY, 100, 300);
}

var wipeCanvas = () => {
    ctx.clearRect(0, 0, c.width, c.height)
}

var draw = (e) => {
    if (mode == "rect") {
        drawRect(e);
    } else {
        drawCircle(e);
    }
}

c.addEventListener("click", draw);

var bToggle = document.getElementById("buttonToggle");
bToggle.addEventListener("click", toggleMode)

var clearB = document.getElementById("buttonClear");
clearB.addEventListener("click", wipeCanvas)

