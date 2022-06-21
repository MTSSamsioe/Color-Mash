


// Code for count down clock and game start button

let clock = 20;

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
  
  // code from line 17 to 26 and line 35 to 38  is heavily influenced from https://www.codegrepper.com/code-examples/javascript/add+countdown+time+to+game+javascript
  
  let interval = setInterval(function(){
  document.getElementById('timeLeft').innerHTML=clock;
  --clock;
    if (clock === -2){
      clearInterval(interval);
      clock = 20;
      // Changes time to game over
      document.getElementById('timeLeft').innerHTML='Game over';
      // push score to high score array
      highScore();
      // show answer buttons
      document.getElementById("yes").style.visibility = "hidden";
      document.getElementById("no").style.visibility = "hidden";
      // Show start button and hide answerbuttons
      document.getElementById('startBtn').style.visibility = "visible";
      //document.getElementsByClassName("btn").style.visibility = "hidden"
      let score = parseInt(document.getElementById("score").innerText);
      alert(`You're out of time! Your score is ${score} `);
     
    }
  }, 1000);
}

// function to generate random numbers
function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
  }

  // functio to change colors and words
  function wordAndColChange() {
    // Array for wrods and colors
   let colorsArray = ["RED", "GREEN", "BLUE", "ORANGE" ];
   let wordsArray = ["RED", "GREEN", "BLUE", "ORANGE" ];
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

// function that checks answers if "yes" button is pressed 
function checkCorrectAnswer(type) {
  
    // Top word and color of bottom word
    let topWordOnScreen = document.getElementById("topWord").innerText;
    let bottomColorOnScreen = document.getElementById("bottomWord").style.color;
    // Change Captial letters to lower case so they can compare to colors
    let toLowerCaseWords = topWordOnScreen.toLowerCase();
    // If statement that compares that the to word and the color of the bottom word match
  
    let score = parseInt(document.getElementById("score").innerText);
    if (type === "yes" ? toLowerCaseWords == bottomColorOnScreen: toLowerCaseWords !== bottomColorOnScreen ) {
      img("check");
      
      document.getElementById("score").innerText = ++score;
    } else {
      img("cross");
      document.getElementById("score").innerText = --score;
    }
  
  }
   
    // Function that saves higest score to an array
    let highScoreArray = [];
    function highScore() {
      // adds finalscore to high score array
      
       let finalScore = parseInt(document.getElementById("score").textContent);
        
        highScoreArray.push(finalScore);
        highScoreArray.sort();
      
        console.log(highScoreArray);
        document.getElementById("highScore").innerHTML = highScoreArray[highScoreArray.length - 1];
        
      }

 // function to show checkmark when correct
function img(type) {
  if (type === "check") {
    document.getElementById("check").style.visibility = "visible";
    setTimeout(function(){document.getElementById("check").style.visibility = "hidden"}, 500);
  } else if (type === "cross") {
    document.getElementById("cross").style.visibility = "visible";
    setTimeout(function(){document.getElementById("cross").style.visibility = "hidden"}, 500);
  } else {
    alert("test")
  }
  
  
  }
  


  
 

    
    
