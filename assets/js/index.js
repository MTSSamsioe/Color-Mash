


// Code for count down clock and game start button

let clock = 20;

function start() {

    // Sets score to 0
    document.getElementById("score").innerHTML = 0
    // hides starta button while function is running
    document.getElementById('startBtn').style.visibility = "hidden";
    // show answer buttons
    document.getElementById("yes").style.visibility = "visible";
    document.getElementById("no").style.visibility = "visible";
    // Change words and colors of the games inital questions
    wordAndColChange()
  
  // code from line 17 to 26 and line 35 to 38  is heavily influenced from https://www.codegrepper.com/code-examples/javascript/add+countdown+time+to+game+javascript
  
  let interval = setInterval(function(){
      
  
  document.getElementById('timeLeft').innerHTML=clock;
  --clock;
    if (clock === -2){
      clearInterval(interval);
      clock = 20;
      // Changes time to game over
      document.getElementById('timeLeft').innerHTML='Game over';
      
      // show answer buttons
      document.getElementById("yes").style.visibility = "hidden";
      document.getElementById("no").style.visibility = "hidden";
      // Show start button and hide answerbuttons
      document.getElementById('startBtn').style.visibility = "visible";
      //document.getElementsByClassName("btn").style.visibility = "hidden"
      alert("You're out of time!");
     
    }
  }, 1000);
}

// function to generate random numbers
function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber
  }

  // functio to change colors and words
  function wordAndColChange() {
    // Array for wrods and colors
    colorsArray = ["RED", "GREEN", "BLUE", "ORANGE" ]
    wordsArray = ["RED", "GREEN", "BLUE", "ORANGE" ]
   // Random top and bottom words
  let randomTopWord = wordsArray[randomNumber()];
   document.getElementById("topWord").innerHTML = randomTopWord
  let randomBottomWord = wordsArray[randomNumber()];
   document.getElementById("bottomWord").innerHTML = randomBottomWord
  // Random colors
  let randomTopColor = colorsArray[randomNumber()]
  document.getElementById("topWord").style.color = randomTopColor ;
  let randomBottomColor = colorsArray[randomNumber()]
  document.getElementById("bottomWord").style.color = randomBottomColor ;
  
}