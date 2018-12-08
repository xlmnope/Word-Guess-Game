
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
}



//console.error('//');
//console.error('//')

//guess('e')
//guess('i')
//guess('o')
//guess('u')
//guess('a')

// add letters to array if customer already typed them in
//// display the letters the customer types in in "already guessed" area
//// if letter is already in the array display an error message 
/*
//scoring
/// create variable for guessesRemaining start it at a number
var guessesRemaining = 5;
var buttonclick = $(".btn-submit");
buttonclick.on("click", function (event) {
  guessesRemaining = guessesRemaining--;
  console.log(guessesRemaining);
})
*/
// reduce number by one when customer guesses letter that they haven't guessed before
// end game if guessesRemaining is 0


// if letter customer typed is a letter in the word, display the letter in the correct position
//// change the array to get rid of the _??

//add songs
//create events for gameWin and gameLose
// once all letters in the word are guessed and number of guessesleft is more than 0 = gameWin
// once number of guessesLeft is less than 1 play sad song = gameLose
//gameWin happy song gameLose sad song

// play again
////show user their score and ask if they want to play again
//// if they click yes chose another random word from array

