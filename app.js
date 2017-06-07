'use strict';


var userName = prompt('Hey, before we start the quiz on Maddy, what is your name?').toUpperCase();
alert('Very nice to meet you '+ userName + '. I always need new friends.');
console.log('I first asked the user for their name, to help personalize the experience, and then said it was nice to meet them.')

//question #1 of yes or no questions
var city = prompt('Question #1: Is Maddy from Dallas?').toUpperCase();
  if (city === 'NO') {
     alert ('Correct!');
  } else {
   alert ('Incorrect...moving on!');
};
console.log('Then I asked my first yes or no question, if the user answers correctly they get a Correct! confirmation if not they are told to move on.')

//question #2 of yes or no questions
var leastFavoriteFood = prompt ('Question #2: Does Maddy like french toast?').toUpperCase();
if  (leastFavoriteFood=== 'NO') {
  alert ('Corret!');
}
else {
  alert ('Incorrect...moving on!')
}
console.log('Then I asked my second yes or no question, if the user answers correctly they get a Corret! confirmation if not they are told to move on.')

//question #3 of yes or no questions
var school = prompt ('Question #3: Did kids call Maddy snaggletooth Stevens in elementary school?').toUpperCase();
if  (school=== 'YES') {
  alert ('Corret!');
}
else {
  alert ('Incorrect...moving on!')
}
console.log('Then I asked my third yes or no question, if the user answers correctly they get a Corret! confirmation if not they are told to move on.')

//question #4 of yes or no questions
var job = prompt ('Did Maddy help reset over 3,000 apple IDs at the Apple store?').toUpperCase();
if  (job=== 'YES') {
  alert ('Corret!');
}
else {
  alert ('Incorrect...moving on!')
}
console.log('Then I asked my fourth yes or no question, if the user answers correctly they get a Corret! confirmation if not they are told to move on.')

//question #5 of yes or no  questions
var goals = prompt ('Is there a pug farm in Maddy\'s future?').toUpperCase();
if  (goals=== 'YES') {
  alert ('Corret!');
}
else {
  alert ('Incorrect...moving on!')
}
console.log('Then I asked my fifth yes or no question, if the user answers correctly they get a Corret! confirmation if not they are told to move on.')
