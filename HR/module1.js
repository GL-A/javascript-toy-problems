// Write a function called "isOldEnoughToDrink".
// Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.

function isOldEnoughToDrink(age) {
  // your code here
  return age >= 21 ? true : false;
}

// Write a function called "isOldEnoughToDrive".
// Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States.
function isOldEnoughToDrive(age) {
  // your code here
  return age >= 16 ? true : false;
}

// Given a number, in this case an age, 'isOldEnoughToVote' returns whether
// a person of this given age is old enough to legally vote in the United States.
function isOldEnoughToVote(age) {
  // your code here
  return age >= 18 ? true : false;
}

// Write a function called "isOldEnoughToDrinkAndDrive".
// Given a number, in this case an age, "isOldEnoughToDrinkAndDrive"
// returns whether a person of this given age is old enough to legally
// drink and drive in the United States.
function isOldEnoughToDrinkAndDrive(age) {
  // your code here
  return false;
}

// Write a function called "getProperty".
// Given an object and a key, "getProperty"
// returns the value of the property at the given key.
function getProperty(obj, key) {
  // your code here
  return obj[key];
}

// Write a function called "addProperty".
// Given an object, and a key, "addProperty"
// sets a new property on the given object with a value of true.
function addProperty(obj, key) {
  // your code here
  obj[key] = true;
  return obj;
}

// Write a function called "removeProperty".
// Given an object and a key, "removeProperty"
// removes the given key from the given object.
function removeProperty(obj, key) {
  // your code here
  delete obj[key];
  return obj;
}

// Write a function called "checkAge".
// Given a person's name and age, "checkAge" returns one of two messages:
// "Go home, {insert_name_here}!", if they are younger than 21.
// "Welcome, {insert_name_here}!", if they are 21 or older.
function checkAge(name, age) {
  // your code here
  var m1 = 'Go home, ';
  var m2 = 'Welcome, ';
  name = name + '!';
  return age >= 21 ? m2 + name: m1 + name;
}

// Write a function called "getFullName".
// Given a first and a last name, "getFullName"
// returns a single string with the given first and last names separated by a single space.
function getFullName(firstName, lastName) {
  // your code here
  return firstName + ' ' + lastName;
}

// Write a function called "getLengthOfWord".
// Given a word, "getLengthOfWord" returns the length of the given word.
function getLengthOfWord(word) {
  // your code here
  return word.length;
}

// Write a function called "getLengthOfTwoWords".
// Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.
function getLengthOfTwoWords(word1, word2) {
  // your code here
  return word1.length + word2.length;
}

// Write a function called "isGreaterThanTen".
// Given a number, "isGreaterThanTen" returns whether it is greater than 10.
function isGreaterThanTen(num) {
  // your code here
  return num > 10 ? true : false;
}

// Write a function called "isLessThan30".
// Given a number, "isLessThan30" returns
// whether the given number is less than 30.
function isLessThan30(num) {
  // your code here
  return num < 30 ? true : false;
}

// Write a function called "equalsTen".
// Given a number, "equalsTen" returns
// whether or not the given number is 10.
function equalsTen(num) {
  // your code here
  return num === 10 ? true : false;
}

// Write a function called "isLessThan".
// Given 2 numbers, "isLessThan" returns
// whether num2 is less than num1.
function isLessThan(num1, num2) {
  // your code here
  return num2 < num1 ? true : false;
}

// Write a function called "isGreaterThan".
// Given 2 numbers, "isGreaterThan" returns
// whether num2 is greater than num1.
function isGreaterThan(num1, num2) {
  // your code here
  return num2 > num1 ? true : false;
}

// Write a function called "isEqualTo".
// Given 2 numbers, "isEqualTo" returns
// whether num2 is equal to num1.
function isEqualTo(num1, num2) {
  // your code here
  return num1 === num2 ? true : false;
}

// Write a function called "isEven".
// Given a number, "isEven" returns whether it is even.
function isEven(num) {
  // your code here
  return num % 2 === 0 ? true : false;
}

// Write a function called "isOdd".
// Given a number, "isOdd" returns
// whether the given number is odd
function isOdd(num) {
  // your code here
  return num % 2 === 1 ? true : false;
}

// Write a function called "isSameLength".
// Given two words, "isSameLength" returns
// whether the given words have the same length.
function isSameLength(word1, word2) {
  // your code here
  return word1.length === word2.length ? true : false;
}

// Write a function called "areBothOdd".
// Given 2 numbers, "areBothOdd" returns
// whether or not both of the given numbers are odd.
function areBothOdd(num1, num2) {
  // your code here
  if(num1 % 2 === 1){
    if(num2 % 2 === 1){
      return true;
    }
  }
  return false;
}

// Write a function called "isEitherEven".
// Given two numbers, "isEitherEven" returns
// whether or not either one of the given numbers is even.
function isEitherEven(num1, num2) {
  // your code here
  if( num1 % 2 === 0 || num2 % 2 === 0 ){
    return true;
  }
  return false;
}

// Write a function called "isOddLength".
// Given a word, "isOddLength" returns whether
// the length of the given word is odd.
function isOddLength(word) {
  // your code here
  var lengthSaver = word.length;
  return lengthSaver % 2 === 1 ? true : false;
}

// Write a function called "isEvenLength".
// Given a word, "isEvenLength" returns
// whether the length of the word is even.
function isEvenLength(word) {
  // your code here
  return word.length % 2 === 0 ? true : false;
}

// Write a function called "isEvenAndGreaterThanTen".
// Given a number, "isEvenAndGreaterThanTen" returns
// whether it is both even and greater than 10.
function isEvenAndGreaterThanTen(num) {
  // your code here
  if( num > 10 && num % 2 === 0 ) {
      return true;
  }
  return false;
}

// Write a function called "average".
// Given two numbers, "average" returns their average.
function average(num1, num2) {
  // your code here
  return (num1 + num2) / 2;
}

// Write a function called "computeAreaOfATriangle".
// Given the base and height of a triangle,
// "computeAreaOfATriangle" returns its area.
function computeAreaOfATriangle(base, height) {
  // your code here
  return (base * height) / 2;
}

// Write a function called "cube".
// Given a number, "cube" returns
// the cube of that number.
function cube(num) {
  // your code here
  return Math.pow(num, 3);
}

// Write a function called "square".
// Given a number, "square" should
// return the square of the given number.
function square(num) {
  // your code here
  return Math.pow(num, 2);
}

// Write a function called "computeAverageLengthOfWords".
// Given two words, "computeAverageLengthOfWords" returns
// the average of their lengths.
function computeAverageLengthOfWords(word1, word2) {
  // your code here
  var average = 0;
  for ( var key in arguments ) {
    average += arguments[key].length;
  }
  return average / arguments.length;
}

// Write a function called "addFullNameProperty".
// Given an object that has a "firstName" property
// and a "lastName" property, "addFullNameProperty"
// returns a "fullName" property whose value is a string
// with the first name and last name separated by a space.
function addFullNameProperty(obj) {
  // your code here
  obj["fullName"] = obj.firstName + ' ' + obj.lastName;
  return obj
}

// Write a function called "addObjectProperty".
// Given two objects and a key, "addObjectProperty"
// sets a new property on the 1st object at the given
// key. The value of that new property is the entire 2nd object.
function addObjectProperty(obj1, key, obj2) {
  // your code here
  obj1[key] = obj2;
  return obj1;
}

// Write a function called "isPersonOldEnoughToDrinkAndDrive".
// Given a "person" object, that contains an "age" property,
// "isPersonOldEnoughToDrinkAndDrive" returns whether the given
// person is old enough to legally drink and drive in the United States.
function isPersonOldEnoughToDrinkAndDrive(person) {
  // your code here
  return false;
}

// Write a function called "isPersonOldEnoughToDrive".
// Given a "person" object, that contains an "age" property,
// "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive.
function isPersonOldEnoughToDrive(person) {
  // your code here
  return person.age >= 16 ? true : false;
}

// Write a function called "isPersonOldEnoughToVote".
// Given a "person" object, that contains an "age" property,
//  "isPersonOldEnoughToVote" returns whether the given
//  person is old enough to vote.
function isPersonOldEnoughToVote(person) {
  // your code here
  return person.age >= 18 ? true : false;
}

// Write a function called "isPersonOldEnoughToDrink".
// Given a "person" object, that contains an "age" property,
// "isPersonOldEnoughToDrink" returns whether the given person is old enough to drink.
function isPersonOldEnoughToDrink(person) {
  // your code here
  return person.age >= 21 ? true : false;
}

// Write a function called "addArrayProperty".
// Given an object, a key, and an array, "addArrayProperty"
// sets a new property on the object at the given key, with its value set to the given array.
function addArrayProperty(obj, key, arr) {
  // your code here
  obj[key] = arr;
  return obj;
}

// Write a function called "getNthElement".
// Given an array and an integer, "getNthElement"
// returns the element at the given integer, within the given array.

function getNthElement(array, n) {
  // your code here
  return array[n];
}

// Write a function called "getFirstElement".
// Given an array, "getFirstElement" returns the first element of the given array.
function getFirstElement(array) {
  // your code here
 return array[0];
}
//
// Write a function called "getLastElement".
// Given an array, "getLastElement" returns the last element of the given array.
function getLastElement(array) {
  // your code here
  return array[array.length - 1];
}

// Write a function called "addToFront".
// Given an array and an element, "addToFront"
// adds the given element to the front of the given
// array, and returns the given array.
function addToFront(arr, element) {
  // your code here
  arr.unshift(element);
  return arr;
}

// Write a function called "addToBack".
// Given an array and an element, "addToBack"
// returns the given array with the given element added to the end.
function addToBack(arr, element) {
  // your code here
  arr.push(element);
  return arr;
}

// Write a function called "computeAreaOfARectangle".
// Given the length and width of a rectangle, "computeAreaOfARectangle"
// returns its area.
function computeAreaOfARectangle(length, width) {
  // your code here
  return length * width;
}

// Write a function called "computePerimeterOfARectangle".
// Given a length and a width describing a rectangle, "computePerimeterOfARectangle"
// returns its perimter.
function computePerimeterOfARectangle(length, width) {
  // your code here
  return (length * 2) + (width * 2);
}

// Write a function called "computePerimeterOfATriangle".
// Given 3 sides describing a triangle, "computePerimeterOfATriangle"
// returns its perimter.
function computePerimeterOfATriangle(side1, side2, side3) {
  // your code here
  var argumentsArr = [];
  for ( var key in arguments ) {
    argumentsArr.push(arguments[key]);
  }
  return argumentsArr.reduce((a,b) => {return a + b});
}

// Write a function called "computeTripledAreaOfARectangle".
// Given a length and width of a rectangle, "computeTripledAreaOfARectangle"
// returns the rectangle's area, multiplied by 3.
function computeTripledAreaOfARectangle(length, width) {
  // your code here
  return (length * width) * 3;
}

// Write a function called "computePerimeterOfACircle".
// Given the radius of a circle, "computePerimeterOfACircle"
// returns its perimeter.
function computePerimeterOfACircle(radius) {
  // your code here
  return 2 * Math.PI * radius;
}

// Write a function called "computeAreaOfACircle".
// Given the radius of a circle, "computeAreaOfACircle"
// returns its area.
function computeAreaOfACircle(radius) {
  // your code here
 return Math.PI * (Math.pow(radius, 2));
}

// Write a function called "computePower".
// Given a number and an exponent, "computePower"
// returns the given number, raised to the given exponent.
function computePower(num, exponent) {
  // your code here
 return Math.pow(num, exponent);
}

// Write a function called "computeSquareRoot".
// Given a number, "computeSquareRoot" returns its square root.
