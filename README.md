# COLOR-MASH
---
Color-Mash is a game that practises the players mental agility in an entertaining an competetive way.
Color-Mash is a fully responsive javascript game that can be played in all popular browsers anywhere.
The target audience for this game is anyone that want to improve their mental agility or just love games.
 

## Features
---

## Existing Features
---
### Header 
- Logo
    - The logo and game title is the first the visitor sees. The colored shadow effects gives a hint to the visitor that the game is about colors.
- Game stats and time section
    - Below the game title you can see a devided section of the header that contains the following:
        - **Time:** shows "0" before the visitor starts a new game. After starting a new game a clock starts to count down from 20 seconds. When the clock reaches 0 the text changes to game over.
        - **Score:** shows the visitor how many scores that have been achived during the running game. A correct answer gives one point and an error will deduct one point. After the time is up it will still show the visitors score from the previous game until a new game is started.
        - **High score:** shows the highest scrore from previous games. This gives the visitors the oportunity to keep track of the best score achived so the visitor knows what score to try to beat.
- Instructions popup button
The instructions popup button is located in a fixed position in the top lefft corner of the screen so the visitor easily can get additional instructions on how to play the game. The button is in an other color so the visitor clearly can see it.
![Imgage of header before the first game](assets/images/header.png)
![Imgage of header after the first game](assets/images/header_after_game.png)
---
- Instructions popup
The instructions popup gives additional explenation on how to play the game and also provide a gif that shows how the game is played. The window can be closed on the button on top of the screen. This helps the visitors that need more explaning to understand the rules of the game.
![Imgage of the instructions popup window](assets/images/instructions_pop_up.png)
---
### Game section
- **Startbutton:** starts a new game which will start the count down clock, hide the start new game button, show the answer buttons and present a new question. The start new game buttton is centerde and big in size so it is obious to the visitor how to start a new game. When the game is over an alert message will tell the user that time is up and the final score of the game.
- **Instructions:** Shows a simple and short explenation of how to play the game. More instructions can be found in the top left corner of the screen. This gives a clean look to the game section for players that don´t need further guidance.
- **Word oval:**
    - **Meaning and top word:** Shows the word "Meaning" and the top word just below so the visitor easily can connect the meaning of the top word with the meaning of that word. 
    - **Word Color and bottom word:** Shows the word "Word Color" and the bottom word just above so the visitor easily can connect the color of the bottom word.
![Imgage of the questions section before game](assets/images/games_section_before_game.png)
![Imgage of the questions section during game](assets/images/games_section_during_game.png)

### Features Left To Implement
- Longer highscore list so the player can see the best three scores instead of the best soley. 

## Testing
---

### Validator Testing

- HTML
    - No errors were found when running the officila w3c validator LINK.
- CSS
    - No errors were found when running the officila (Jigsaw) Validator. LINK
- JavaScript
    - No errors were found when running the official Jshint validator. LINK
        - The following metrics were returned:
            - There are XX functions in this file.
            - Function with the largest signature takes XX arguments, while the median is XX.
            - Largest function has 10 statements in it, while the median is XX.
            - The most complex function has a cyclomatic complexity value of 4 while the median is XX.

### Fixed Bugs
- Could not the if statement in function "checkCorrectAnswer(type)" to work.
    - FIX: The arrays for words is in Uppercase letters but the colors returned by the "document.getElementById("bottomWord").style.color;" returned lowercase letter. to get them to compare i neede to first make the words from array to lowercase letters before comparing in the if statement.
- Could not get high score array to sort in the correct way.
    - FIX: I used the .sort() method to sort the array with the smallest number first. Then I took the last index of the array. But I later found that .sort() first converted the values to a string value and then tryed to sort them. I found the solution on this site: [Solution to bug](https://dmitripavlutin.com/javascript-array-sort-numbers/)
    ![Picture of .sort()](assets/images/sort_Method.png)
    ![Picture of .sort() bug fix](assets/images/sort_bugfix.png)

### Unfixed Bugs
 
Increment 
## Deployment
---
- The site was deployed to GitHub Pages the steps was:
    - Go to settings in your GitHub repository, scroll to the pages section.
    - From the sources section, press the drop down menu and select 
## Credits
---
### content

### Media


## Other General Project Advice
---

