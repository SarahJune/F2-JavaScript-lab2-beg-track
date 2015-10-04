'use strict';

/* ********************************************************
LAB 2: LOOPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js */

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

*/

function Blob(color, weight, eyes) {
  this.color = color;
  this.weight = weight;
  this.eyes = eyes;
}
// TODO: Next, create an instance of Blob named blob.

var blob = new Blob('green', '200lb', '30');

// TODO: Then, use a loop to calculate how long it took the blob to finish
// with Dowington.

function calculateHours(population) {
  var myArray = [];
  var i = 0;
  var n = 0;
  while (n <= population) {
    n = n + i;
    myArray.push(n);
    i = i + 1;
  }
  return myArray.length;
}

// TODO: assign me the value of the
// above calculation (how long it took
// the blob to eat Dowington)

var hoursSpentInDowington = calculateHours;

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  var myArray = [];
  var hours = 0;
  var eaten = peoplePerHour;
  while (eaten < population) {
    eaten = eaten + hours;
    myArray.push(eaten);
    hours = hours + 1;
  }
  return myArray.length;
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(500, 5) === 32,
  'answer should be 32');
assert(blob.hoursToOoze(750, 750) === 0,
  'answer should be 0. It takes no time at all for a big ass blob to eat 750 people.');
assert(blob.hoursToOoze(0, 0) === 0,
  'no people for this blob to eat. :\'((((((((');

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(home, language) {
  this.homePlanet = home;
  this.language = language;
}

// sb is a SentientBeing object
function sayHello(sb) {
  // TODO: say hello prints out (console.log's) hello in the
  // language of the speaker, but returns it in the language
  // of the listener (the sb parameter above).
  // use the 'hello' object at the beginning of this exercise
  // to do the translating
  console.log(hello[this.language]);
  return hello.sb;
}
  //TODO: put this on the SentientBeing prototype
SentientBeing.prototype.sayHello();

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing('Qo\'noS', 'klingon'); // TODO: make a klingon
var romulan = new SentientBeing('Jolan\'tru', 'Romulus'); // TODO: make a romulan
var human = new SentientBeing('federation standard', 'Earth'); // TODO: make a human

assert(human.sayHello(klingon) === 'nuqneH',
  'the klingon should hear nuqneH');
assert(klingon.sayHello(human) === 'hello',
  'the human should hear hello');
assert(romulan.sayHello(klingon) === 'nuqneH',
  'the klingon should hear nuqneH');
assert(klingon.sayHello(romulan) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert(human.sayHello(romulan) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert(romulan.sayHello(human) === 'hello',
  'the human should hear hello');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
  // TODO: return the largest number in the given array
var myArray = [1, 2, 3];
function max(array) {
  return Math.max.apply(Math, array);
}
console.log(max(myArray));
// props to this explanation of Math.math.apply: http://stackoverflow.com/questions/1379553/how-might-i-find-the-largest-number-contained-in-a-javascript-array

// TODO: write three more assertions
assert(max([1, 3, 2]) === 3, '[1,3,2]');
assert(max([425, 333]) === 425, '425');
assert(max([425, 333]) === 333, 'NOPE');
assert(max([1, 1]) === 1, 'ALSO NOPE');

  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()
var myString = 'KuNg foO MaSTeR';
function variablify(string) {
  var newArray = [];
  newArray = string.toLowerCase().split(' ');
  var str = [];
  for (var i = 0; i < newArray.length; i++) {
    str.push(newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1, newArray[i].length));
  }
  newArray = str.join('');
  return newArray.charAt(0).toLowerCase() + newArray.slice(1, newArray.length);
}

console.log(variablify(myString));
// TODO: write three more assertions
assert(variablify('one two three') === 'oneTwoThree',
  'variablify(\'one two three\')');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
