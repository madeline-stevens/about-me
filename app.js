'use strict';

var rightAnswers = 0;
var userName = prompt('Hey, before we start the quiz on Maddy, what is your name?').toUpperCase();
alert('Very nice to meet you ' + userName + '. I always need new friends.');
console.log('I first asked the user for their name, to help personalize the experience, and then said it was nice to meet them.');

//question #1 of yes or no questions
var city = prompt('Question #1: Is Maddy from Dallas? Yes or No.').toUpperCase();
if (city === 'NO') {
  alert ('Correct!');
  rightAnswers++;
} else {
  alert ('Incorrect...moving on!');
};
console.log('Then I asked my first yes or no question, if the user answers correctly they get a Correct! confirmation if not they are told to move on. Yes or No. ALSO NEED TO ADD AN IF/ELSE FOR IF USER DOES NOT WRITE A PASSABLE ANSWER');

//question #2 of yes or no questions
var leastFavoriteFood = prompt ('Question #2: Does Maddy like french toast? Yes or No.').toUpperCase();
if (leastFavoriteFood === 'NO') {
  alert ('Correct!');
  rightAnswers++;
}
else {
  alert ('Incorrect...moving on!');
};
console.log('Then I asked my second yes or no question, if the user answers correctly they get a Correct! confirmation if not they are told to move on.');

//question #3 of yes or no questions
var school = prompt ('Question #3: Did kids call Maddy snaggletooth Stevens in elementary school?').toUpperCase();
if (school === 'YES') {
  alert ('Correct!');
}
else {
  alert ('Incorrect...moving on!');
};
console.log('Then I asked my third yes or no question, if the user answers correctly they get a Correct! confirmation if not they are told to move on.');

//question #4 of yes or no questions
var job = prompt ('Did Maddy help reset over 3,000 apple IDs at the Apple store?').toUpperCase();
if (job === 'YES') {
  alert ('Correct!');
}
else {
  alert ('Incorrect...moving on!');
};
console.log('Then I asked my fourth yes or no question, if the user answers correctly they get a Correct! confirmation if not they are told to move on.');

//question #5 of yes or no  questions
var goals = prompt ('Is there a pug farm in Maddy\'s future?').toUpperCase();
if (goals === 'YES') {
  alert ('Correct!');
}
else {
  alert ('Incorrect...moving on!');
};
console.log('Then I asked my fifth yes or no question, if the user answers correctly they get a Correct! confirmation if not they are told to move on.');

//question #6- my first numeric input question with four guesses
var correctNumber = 4;
var attempts = 4;

while (attempts > 0) {
  var answer = parseInt(prompt ('You have four attempts to guess how many bones Maddy has broken?')); //by default a prompt method will turn even a numeric answer into the string data type, parseInt will convert to a true number data type.
  if (answer < correctNumber) {
    alert ('Incorrect! Number too low! Keep trying!'); // I took out attempts--; following this line of code to test whether the counting down would work- this was a success!!!
  }
  else if (answer > correctNumber) {
    alert ('Incorrect! Number too high! Keep trying!');
    attempts--;
  }
  else if (answer === correctNumber) {
    alert ('Correct! Most of them are soccer related...⚽️');
    attempts = 0; // this is what sets the while loop to 0, thus making it false, and exiting the loop
  }
  else //if?
  alert ('Incorrect! Number too low! Keep trying!');
  attempts--;

  //} else {
  //alert ('Sorry, you ran out of guesses.'');
  // counter = 0;
}
user
console.log ('!!!!!!After the four attempts, I DO NOT have a message saying that the user is done!!!');

//question #7- my second numeric input question
var whichBone = ['shoulder', 'knee', 'finger', 'wrist'];
var guessesLeft = 6; // sam added the derement right after this line of code, mine is on line 98

while (guessesLeft > 0) {
  var answer = prompt ('Next question: You have six attempts to try to correctly guess just ONE of my broken bones. No need to be too specific.');
  for (var i = 0; i < whichBone.length; i++) {
    if (answer === whichBone[i]){
      alert ('Correct! You are all done!');
      guessesLeft = 0; //kicks us out of of the while
      break; //get out of the for loop // a trick for ian's #6 was using guessesLeft = -1; instead of break or guessesLeft= 0; becuase that will also make the prompt false.
    }
  }
  if (guessesLeft > 0) { //get out of the while loop???
    guessesLeft--;
    alert ('Incorrect! You have ' + guessesLeft + ' attempts left!');
    if (guessesLeft === 0) {
      alert ('And you are out of guesses! And done with the quiz!');//message if there are attempts left
      console.log ('I STILL NEED TO INCLUDE THE LAST MESSAGE ABOUT HOW MANY QUESTIONS THE USER GOT CORRECT! need to add correctAnswers++; , still need to make sure the upperCase is correct??? ');
      //alert ('userName, You got '+ 'correctAnswers' + ' out of 7 questions correct! Good job!');
    }
  }
}
