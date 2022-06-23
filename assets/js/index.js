// Clock variable that function start() is using
let clock = 20;

/**
 * Function starts a coundown timer from 20.
 * Changes words and colors
 * Hides Start game button and shows answer buttons. 
 * When it reaches 0 it shows text Game over, an alert message and resets timer variable.
 */
function start() {
  // Sets score to 0
  document.getElementById("score").innerHTML = 0;
  // hides starta button while function is running
  document.getElementById('startBtn').style.visibility = "hidden";
  // show answer buttons
  document.getElementById("yes").style.visibility = "visible";
  document.getElementById("no").style.visibility = "visible";
  // Change words and colors of the games inital questions
  wordAndColChange();
  // code from line 22 to 28 and line 40 to 43  is taken from https://www.codegrepper.com/code-examples/javascript/add+countdown+time+to+game+javascript with some minor changes
  let interval = setInterval(function () {

  document.getElementById('timeLeft').innerHTML = clock;
  clock--;
    if (clock === -2) {

      clock = 20;
      // Changes time to game over
      document.getElementById('timeLeft').innerHTML = 'Game over';
      // push score to high score array
      highScore();
      // show answer buttons
      document.getElementById("yes").style.visibility = "hidden";
      document.getElementById("no").style.visibility = "hidden";
      // Show start button and hide answerbuttons
      document.getElementById('startBtn').style.visibility = "visible";
      //document.getElementsByClassName("btn").style.visibility = "hidden"
      let score = parseInt(document.getElementById("score").innerText);
      alert(`You're time is up! Your score is ${score} `);
      clearInterval(interval);
    }
  }, 1000);
}

/**
 * Function Generates a random number from 0 to 3
 * 
 */
function randomNumber() {
  let randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

/**
 * Function changes the question words
 * and also changes the color of the question words
 */
function wordAndColChange() {
  // Array for wrods and colors
  let colorsArray = ["RED", "GREEN", "BLUE", "PURPLE"];
  let wordsArray = ["RED", "GREEN", "BLUE", "PURPLE"];
  // Random top and bottom words
  let randomTopWord = wordsArray[randomNumber()];
  document.getElementById("topWord").innerHTML = randomTopWord;
  let randomBottomWord = wordsArray[randomNumber()];
  document.getElementById("bottomWord").innerHTML = randomBottomWord;
  // Random colors
  let randomTopColor = colorsArray[randomNumber()];
  document.getElementById("topWord").style.color = randomTopColor;
  let randomBottomColor = colorsArray[randomNumber()];
  document.getElementById("bottomWord").style.color = randomBottomColor;
}

/**
 * Function Checks the the answer given by player and increments or decreases score
 * 
 */
function checkCorrectAnswer(type) {
  // Top word and color of bottom word
  let topWordOnScreen = document.getElementById("topWord").innerText;
  let bottomColorOnScreen = document.getElementById("bottomWord").style.color;
  // Change Captial letters to lower case so they can compare to colors
  let toLowerCaseWords = topWordOnScreen.toLowerCase();
  // If statement that compares that the to word and the color of the bottom word match
  let score = parseInt(document.getElementById("score").innerText);
    if (type === "yes" ? toLowerCaseWords == bottomColorOnScreen : toLowerCaseWords !== bottomColorOnScreen) {
      img("check");
      document.getElementById("score").innerText = ++score;
  } else {
      img("cross");
      document.getElementById("score").innerText = --score;
  }
}
// Array for function highscore()
let highScoreArray = [];
/**
 * Function that adds the final game score to a high score array, sorts the array and shows the last index
 */
function highScore() {
  let finalScore = parseInt(document.getElementById("score").textContent);
  highScoreArray.push(finalScore);
  highScoreArray.sort((a, b) => a - b); // code on this line after .sort is from https://dmitripavlutin.com/javascript-array-sort-numbers/ 
  document.getElementById("highScore").innerHTML = highScoreArray[highScoreArray.length - 1];
}

/**
 * Function shows a check mark or a cross when a player answer is given
 * 
 */
function img(type) {
  if (type === "check") {
    document.getElementById("check").style.visibility = "visible";
    setTimeout(function () {
      document.getElementById("check").style.visibility = "hidden";
    }, 500);
  } else if (type === "cross") {
    document.getElementById("cross").style.visibility = "visible";
    setTimeout(function () {
      document.getElementById("cross").style.visibility = "hidden";
    }, 500);
  } else {
    alert("You have no valid answer");
  }
}

/**
 * Function makes button for popup with instructions work and also the close button inside the popup
 * 
 */
function popUp(type) {
  if (type === "open") {
    document.getElementById("popUpContainer").style.display = "block";
  } else if (type === "close") {
    document.getElementById("popUpContainer").style.display = "none";
  } else {
    alert("Press X mark in the top right to close window");
  }
}