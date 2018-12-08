
// create array with different quess words
var words = ["Tiger", "Bull", "Hammerhead", "Goblin", "Mako", "Blue", "Lemon", "Basking", "Megamouth", "Prehistoric"];


//chose random word from array 
var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);
// create array with _ for each letter of the array 
var unknownWord = [];
for (var i = 0; i < randomWord.length; i++) {
  unknownWord[i] = "_";
}
// convert the array to a string with space and no comma inbetween...and display it in the html
document.getElementById("blankspaces").innerHTML = unknownWord.join(' ');

var guessesRemaining = 10;
document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
var guessedLetters = [];

//on click of button create event, dont reload the page
//guessesReamining  to decrease  w the clicks 
document.getElementById("btn-submit").addEventListener("click", function(event){
  event.preventDefault();
  console.log("click");
  guessesRemaining--;
  console.log(guessesRemaining);
  document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
  var letter = document.getElementById('Guesslettersfield').value;
  document.getElementById("Guesslettersfield").value = "";
  console.log(letter);
  guess(letter);
  document.getElementById("guessed-letters").innerHTML = guessedLetters;
});


//event check what letter they typed and 
function guess(letter) {
  console.log(letter);
  console.log(letter.toUpperCase())
  const guessIndex = randomWord.toUpperCase().indexOf(letter.toUpperCase());
  //push letter to array everytime someone guesses a letter ..place letter into guess list of letters in html
  guessedLetters.push(letter);
  console.log(guessedLetters);
  document.getElementById("guessed-letters").innerHTML = guessedLetters;

  //check if letter is in word
  if (guessIndex !== -1) {
    //you guessed right, place letter in unkownWord
    unknownWord[guessIndex] = randomWord[guessIndex];
    document.getElementById("blankspaces").innerHTML = unknownWord.join(' ');
  } else {
    console.log("you guessed wrong, try again"); //make this html error later
  }

  // end game if guessesRemaining is 0
  if (guessesRemaining <= 0) {
    alert("Game Over, try again!");
    location.reload();
  } 

}


// NOTWORKING - end game if guessesRemaining is 0



//// if letter is already in the array display an error message 




//add songs
//create events for gameWin and gameLose
// once all letters in the word are guessed and number of guessesleft is more than 0 = gameWin
// once number of guessesLeft is less than 1 play sad song = gameLose
//gameWin happy song gameLose sad song

// play again
////show user their score and ask if they want to play again
//// if they click yes chose another random word from array

