




// create array with different quess words
var words = ["Tiger", "Goblin", "Mako", "Blue", "Lemon", "Basking"];


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

//function that happens when button clicked
function test(){
  var letter = document.getElementById('Guesslettersfieldtest').value;
  //set variable to get index of letter in guessedLetters array
  const guessedLettersIndexLower = guessedLetters.indexOf(letter.toLowerCase());
  const guessedLettersIndexUpper = guessedLetters.indexOf(letter.toUpperCase());
  console.log(guessedLettersIndexLower, guessedLettersIndexUpper);
  $(".already-guessed").hide();
  $(".in-word").hide();
  $(".not-inword").hide();
  //if letter is already guessed display error message
  if (guessedLettersIndexLower !== -1 || guessedLettersIndexUpper !== -1) {
    //show error message
    $(".already-guessed").show();
    console.log("letter already guessed") //make html error later

  } 
  else {
    //guessesReamining  to decrease  w the clicks 
    guessesRemaining--;
    console.log(guessesRemaining);
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    document.getElementById("Guesslettersfieldtest").value = "";
    console.log(letter);
    guess(letter);
    document.getElementById("guessed-letters").innerHTML = guessedLetters;
  }
};


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
    $(".in-word").show();
    unknownWord[guessIndex] = randomWord[guessIndex];
    document.getElementById("blankspaces").innerHTML = unknownWord.join(' ');
     //check if word is fully guessed
    if (unknownWord.indexOf("_") == -1 && guessesRemaining > 0){
      alert("You guessed the word, you win!");
      location.reload();
    }
  } else {
    $(".not-inword").show();
    console.log("you guessed wrong, try again");
  }

  // end game if guessesRemaining is 0
  if (guessesRemaining <= 0) {
    alert("Game Over, try again!");
    location.reload();
  } 

}







//// if letter is already in the array display an error message 




//add songs
//create events for gameWin and gameLose
// once all letters in the word are guessed and number of guessesleft is more than 0 = gameWin
// once number of guessesLeft is less than 1 play sad song = gameLose
//gameWin happy song gameLose sad song

// play again
////show user their score and ask if they want to play again
//// if they click yes chose another random word from array

