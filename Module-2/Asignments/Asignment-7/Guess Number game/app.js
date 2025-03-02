let RandomNumber = Math.floor(Math.random() * 10) + 1;
let tryCount = 1;

do {
    let GuessNumber = +prompt('Try to guess the number between 1 and 10!', 5);
     
    // Check the user number Validation
    while (isNaN(GuessNumber) || GuessNumber > 10 || GuessNumber < 1) {
        alert('Invalid input! Please enter a number between 1 and 10.');
        GuessNumber = +prompt('Please guess a number again from 1 to 10!');
    }

    // Check if GuessNumber matches RandomNumber
    if (GuessNumber === RandomNumber) {
        alert(`Congratulations! You guessed the correct number in ${tryCount} tries. You won the game!`);
    } else if (RandomNumber === (GuessNumber + 1) || RandomNumber === (GuessNumber - 1)) {
        tryCount++;
        var TryAgain = confirm(`So close! The actual number is just 1 away. Do you want to try again?`);
    } else {
        tryCount++;
        alert(`Oops! That's not the right number.`);
        var TryAgain = confirm(`Would you like to try again?`);
    }
} while (TryAgain);

if (TryAgain === false) {
    alert(`Thanks for playing! You tried ${tryCount} times but unfortunately, you lost the game.`);
}

// Description

// it wil check the peompt the value should not biggger than 10 and less than 
// if user will enter that number is 1 number away from the actuall, than it will tell that you are to close.
// it will allow user to try again and again 
// it also allow user to giveup and find actuall number 
// it will also count how many time user try to guess the number