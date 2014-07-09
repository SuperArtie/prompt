
var prompt = require('sync-prompt').prompt;
/*
//NAME GAME
var first = prompt('What is your first name? ');
var last = prompt('What is your last name? ');
var fullName = first + ' ' + last;

console.log('Hello, ' + fullName + '!');
//COLOR TIME
var color = prompt('What is your favorite color? ');
console.log('Your favorite color is ' + color + '.');
//DOG PROM 2
var age = prompt('What is your dog\'s age? ');
console.log(typeof age);
age = parseInt(age);
console.log(typeof age);
var humanYears = age * 7;
console.log('Your dog is ' + humanYears + ' in human years.');
//DRINKIN'
var yourAge = prompt('How old are you? ');
yourAge = parseInt(yourAge);
if (yourAge >= 21)
{
  console.log('You can drink alcohol, ' + fullName + '!');
}
else
{
  console.log('Back to loch with you, Nessie!');
}
//ORIGINAL TEMP CALC
tempType = prompt('f/c? ')
temp = prompt('sup dog? ')
temp = parseInt(temp);
f = (temp - 32) * (5/9);
c = (temp) * (9/5) + 32;

switch(tempType)
{
  case 'f':
    console.log(temp + ' degrees Farenheit is ' + f + ' degrees Celsius.');
    break;

  case 'c':
    console.log(temp + ' degrees Celsius is ' + c + ' degrees Farenheit.');
    break;
}
//IMPROVED TEMP CALC
scale = prompt("what scale do you want to use? (f/c)")
temp = prompt("what's the temperature? ")
temp = parseInt(temp);
var converted;
if(scale === 'f')
{
  converted = (temp - 32) * (5/9);
  alt = 'c';
}
else
{
  converted = (temp) * (9/5) + 32;
  alt = 'f';
}
console.log(temp + scale + ' -> ' + converted + alt);
*/
//CALC BMI
console.log('Please enter your height by feet <enter> then inches <enter>');
var hFeet = prompt(' ');
hFeet = parseInt(hFeet);
var hInch = prompt(' ');
hInch = parseInt(hInch);
var height = (hFeet*12) + hInch;
var weight = prompt('now enter your weight ')
var bmi = (weight/(height*height))*703;
console.log('Yr bmi is ' + bmi + ' you fatty fat lumpkinz');

//CALC BMI IMPROVED
var lbs = prompt('Weight in lbs? ');
var height = prompt('Height in inches? ');

lbs = parseInt(lbs);
height = parseInt(height);

var bmi = ((lbs/(height*height)) * 703);

console.log('you bmi is', bmi.toFixed(1));
