// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guesses = 10;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
// var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// This function is run whenever the user presses a key.

document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    computerMem()
    
    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if (userGuess === computerGuess) {
        wins++;
    } else {
        guesses--;
    }
    if (guesses === 0) {
        losses++
        guesses = 10;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length - 1)];
    }
function computerMem(){
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];    
}


    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "You chose: " + userGuess;
    // computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesText.textContent = guesses;

    // Changes id property to hide useGuess letter
    document.getElementById(event.key).style.color = "#222";
};