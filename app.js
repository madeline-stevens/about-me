'use strict';
var rightAnswer = 0;
var yesNoArray = [
  ['Question #1: Is Maddy from Dallas? Yes or No', ['no', 'n'] , 'Correct!', 'Incorrect!'],
  ['Question #2: Does Maddy like french toast? Yes or No.', ['no', 'n'], 'Correct!', 'Incorrect!'],
  ['Question #3: Did kids call Maddy snaggletooth Stevens in elementary school? Yes or No.', ['yes', 'y'], 'Correct!', 'Incorrect!'],
  ['Question #4: Did Maddy help reset over 3,000 apple IDs at the Apple store? Yes or No.', ['yes', 'y'], 'Correct!', 'Incorrect!'],
  ['Question #5: Is there a pug farm in Maddy\'s future? Yes or No.', ['yes', 'y'], 'Correct!', 'Incorrect!']
];
function yesNoGame(question, answer, correctAlert, incorrectAlert){
  var userAnswer = prompt(question).toLowerCase(); //

  if (answer.includes(userAnswer)) { //answer.includes is what is running through the array checking the userAnswer for matches?
    rightAnswer++;
    alert('Correct!');
  }
  else {
    alert('Incorrect!');
  }

}

for (var i = 0; i < yesNoArray.length; i++) {
  yesNoGame(yesNoArray[i][0], yesNoArray[i][1], yesNoArray[i][2], yesNoArray[i][3]);
} //the first parameter value, yesNoArray [i][0], becomes question, yesNoArray [i][1] becomes [no, n], 

// question #6- my first numeric input question with four guesses
var correctNumber = 4;
var attempts = 4;
function question6 () {
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
  }
}
question6 ();
//question #7- my second numeric input question
var whichBone = ['shoulder', 'knee', 'finger', 'wrist'];
var guessesLeft = 6; // sam added the derement right after this line of code, mine is on line 98
function question7() {
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
}
question7 ();
