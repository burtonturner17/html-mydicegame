var roundomNumber1 = Math.floor(Math.random() * 6 ) + 1;

var roundomImageSource = "images/dice" + roundomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", roundomImageSource);


var roundomNumber2 = Math.floor(Math.random() * 6) + 1;
var roundomImageSource2 = "images/dice" + roundomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", roundomImageSource2);

if (roundomNumber1 > roundomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (roundomNumber1 < roundomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
} else{
    document.querySelector("h1").innerHTML = "Draw!";
}
