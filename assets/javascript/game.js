
// create array with different quess words
var words = ["Great White", "Tiger", "Bull", "Hammerhead", "Goblin", "Mako", "Blue", "Lemon", "Basking", "Megamouth", "Prehistoric"];


//chose random word from array 
var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);
// create array with _ for each letter of the array 
var blankSpaces = [];
for (var i = 0; i < randomWord.length; i++) {
  blankSpaces[i] = "_";
}
// convert the array to a string and display it in html
document.getElementById("blankspaces").innerHTML = blankSpaces.join(' ');
// need to take the commas out and replace with a space

// text field with submit button in html
//on submit button click event check what letter they typed and 

// add letters to array if customer already typed them in
//// display the letters the customer types in in "already guessed" area
//// if letter is already in the array display an error message 

//scoring
/// create variable for guessesRemaining start it at a number
// reduce number by one when customer guesses letter that they haven't guessed before
// end game if guessesRemaining is 0


// if letter customer typed is a letter in the word, display the letter in the correct position

//add songs
//create events for gameWin and gameLose
// once all letters in the word are guessed and number of guessesleft is more than 0 = gameWin
// once number of guessesLeft is less than 1 play sad song = gameLose
//gameWin happy song gameLose sad song

// play again
////show user their score and ask if they want to play again
//// if they click yes chose another random word from array

