document.addEventListener("DOMContentLoaded", startJS);
function startJS() {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const alphabetDiv = document.getElementById("alphabetDiv");
  const startGame = document.getElementById("startGame");
  startGame.addEventListener("click", lunchGame);
  function lunchGame() {
    startGame.style.display = "none";
    let lives = 10; //the user has 10 lives in the begining
    let PCounter = document.createElement("p");
    const DivCounter = document.getElementById("counter");

    for (let i = 0; i < alphabet.length; i++) {
      let btn = document.createElement("button");
      btn.setAttribute("class", "alphabet");
      btn.innerText = alphabet[i];
      alphabetDiv.appendChild(btn);
    }
    PCounter.innerText = `you have ${lives} lives left`;
    console.log(DivCounter);
    DivCounter.appendChild(PCounter);
  }
}
