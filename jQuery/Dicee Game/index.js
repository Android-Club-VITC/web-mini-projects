let randomNumber1 = Math.random() * 6;
randomNumber1 = Math.ceil(randomNumber1);

let randomDiceImage = "images/dice" + randomNumber1 + ".png";

let image1 = $("img")[0];
$(image1).attr("src", randomDiceImage)

let randomNumber2 = Math.ceil(Math.random() * 6);
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
let image2 = $("img")[1];
$(image2).attr("src", randomDiceImage2)


let result = $("h1")[0];

if (randomNumber1 > randomNumber2) {
  $("h2").text("Player 1 wins!🏆");
} else if (randomNumber2 > randomNumber1) {
  $("h2").text("Player 2 wins!🏆");
} else {
  $("h2").text("🚩Draw🚩");
}

var year = new Date().getFullYear();

$("footer").text("© " + year + " Shreyansh Agrawal");
