
var h3 = document.querySelector("h3");
var colors = document.getElementsByTagName("input");
var color1 = colors[0];
var color2 = colors[1];

color1.addEventListener("input", function() {
    changeColor()
})

color2.addEventListener("input", function() {
    changeColor()
})

function changeColor() {
    var body =  document.querySelector("body");
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    h3.innerHTML = body.style.background;
}

changeColor()

var randomButton = document.getElementById("randomColor");
var randomAutoButton = document.getElementById("randomColorAuto");
var randomStopButton = document.getElementById("randomColorStop");
var randomAuto = document.getElementById("randomAuto");

randomButton.addEventListener("click", generateColors);
randomAuto.addEventListener("click", randomColorsAuto);
// randomStopButton.addEventListener("click", randomColorsAuto);

function randomNumber() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}

let intervalId;
function randomColorsAuto(element) {
    if (element.target === randomAutoButton) {
        intervalId = setInterval(function() {
            generateColors();
        }, 1000);
    }
    
    if (element.target === randomStopButton) {
        clearInterval(intervalId);
    }
}

function generateColors() {
    color1.value = randomNumber()
    color2.value = randomNumber()
    changeColor()
}
