// helper function to trigger alert
var dice = document.querySelector(".dice-roll");

dice.addEventListener("click", function () {
  //generate random number (1-6)
  var player1 = Math.floor(Math.random() * 6) + 1;
  var player2 = Math.floor(Math.random() * 6) + 1;

  //change the dice images
  var player1Roll = (document.getElementById("player1").src =
    "./images/dice" + player1 + ".png");
  var player2Roll = (document.getElementById("player2").src =
    "./images/dice" + player2 + ".png");

  document.querySelector("#player1 img").setAttribute("src", player1Roll);
  document.querySelector("#player2 img").setAttribute("src", player2Roll);

  //change the heading to display the winner
  if (player1 === player2) {
    document.querySelector("h1").textContent = "Draw!";
  } else if (player1 > player2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
  } else if (player1 < player2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
  }
});
