const prompt = require("prompt-sync")();
//Generating random number
let number = Math.floor(Math.random() * 100);
let chances = 0; // It counts the number of chances
let guess;
console.log(
  "This is a guessing game.You have to guess the number.If your guessed number matches with the commputer generated number, you win. Otherwise you lose.\n",
);

guess = Number(prompt("Enter your guess:"));
//using do while loop to guess the number.
do {
  if (guess > number) {
    console.log("Your guess is large");
    guess = prompt("Try again😂:");
    ++chances;
    continue;
  } else if (guess < number) {
    console.log("Your guess is Small");
    guess = prompt("Try again😂:");
    ++chances;
    continue;
  }
} while (guess != number);

let score = 100 - chances; //calculating score from counting chances.

//Displaying Score.
console.log(
  "Congratulations🍻! You guessed the correct number.The number was",
  number,
);
if (score > 95) {
  console.log("Wow😲😲,Your score is:" + score + " You are a pro.");
} else if (score <= 95) {
  console.log("Wow😲😲,Your score is:" + score + " You are a decent player.");
} else {
  console.log("You are noob👎👎.");
}
