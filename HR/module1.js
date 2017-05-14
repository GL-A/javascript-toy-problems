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

function computeSquareRoot(num) {
  // your code here
  return Math.sqrt(num);
}

// Write a function called "doubleSquareRootOf".
// Given a number, "doubleSquareRootOf" returns double its square root.
function doubleSquareRootOf(num) {
  // your code here
  return Math.sqrt(num) * 2;
}

// Write a function called "getLengthOfThreeWords".
// Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.
function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  return word1.length + word2.length + word3.length;
}

// Write a function called "joinArrays".
// Given two arrays, "joinArrays" returns an
// array with the elements of "arr1" in order,
// followed by the elementsin "arr2".
function joinArrays(arr1, arr2) {
  // your code here
  return arr1.concat(arr2);
}

Write a function called "getElementsAfter".


// Given an array and an index, "getElementsAfter"
// returns a new array with all the elements after
// (but not including) the given index.
function getElementsAfter(array, n) {
  // your code here
  return array.splice(n + 1);
}

// Write a function called "getElementsUpTo".
// Given an array and a index, "getElementsUpTo",
// returns an array with all the elements up until,
// but not including, the element at the given index.
function getElementsUpTo(array, n) {
  // your code here
  return array.splice(0, n)
}

// Write a function called "getAllElementsButLast".
// Given an array, "getAllElementsButLast" returns an
// array with all the elements but the last.
function getAllElementsButLast(array) {
  // your code here
  array.pop();
  return array;
}

// Write a function called "removeFromFront".
// Given an array, "removeFromFront" returns
// the given array with its first element removed.
function removeFromFront(arr) {
  // your code here
  arr.shift();
  return arr;
}

// Write a function called "removeFromBackOfNew".
// Given an array, "removeFromBackOfNew" returns a
// new array containing all but the last element of the given array.
function removeFromBackOfNew(arr) {
  // your code here
  return arr.slice(0, arr.length -1);
}

// Write a function called "removeFromFrontOfNew".
// Given an array, "removeFromFrontOfNew" returns
// a new array containing all but the first element of the given array.
function removeFromFrontOfNew(arr) {
  // your code here
  return arr.slice(1);
}

// Write a function called "countCharacter".
// Given a string input and a character, "countCharacter"
// returns the number of occurences of a given character in the given string.
function countCharacter(str, char) {
  // your code here
  str = str.split('');
  var numOccurences = 0;
  str.forEach(letter => {
    if(letter === char){
      numOccurences += 1;
    }
  })
  return numOccurences;
}

// Write a function called "getAllLetters".
// Given a word, "getAllLetters" returns an
// array containing every character in the word.
function getAllLetters(str) {
  // your code here
  return str.split('');
}

// Write a function called "getAllWords".
// Given a sentence, "getAllWords" returns
// an array containing every word in the sentence.
function getAllWords(str) {
  // your code here

  return !str ? [] : str.split(' ');
}

// Write a function called "countWords".
// Given a string, "countWords" returns an
// object where each key is a word in the given
// string, with its value being how many times
// that word appeared in th given  string.
function countWords(str) {
  // your code here
  if( !str ){
    return {};
  }
  var obj = {};
  str = str.split(' ');
  str.map(word => {
    if(obj.hasOwnProperty(word)){
      obj[word] ++;
    } else {
      obj[word] = 1;
    }
  })
  return obj;
}

// Write a function called "removeFromBack".
// Given an array, "removeFromBack" returns the
// given array with its last element removed.
function removeFromBack(arr) {
  // your code here
  arr.pop();
 return arr;
}

// Write a function called "or".
// Given 2 boolean expressions, "or"
// returns true or false, corresponding to the || operator.
function or(expression1, expression2) {
  // your code here
  if(expression1 && !expression2){
    return true;
  } else if (expression1 && expression2) {
    return true;
  } else if (!expression1 && expression2) {
    return true;
  }
  return false;
}

// Write a function called "isEitherEvenOrAreBoth7".
// Given two numbers, 'isEitherEvenOrAreBoth7' returns
// whether at least one of them is even, or, both of them are 7.
function isEitherEvenOrAreBoth7(num1, num2) {
  // your code here
  if(num1 === 7 && num2 === 7) {
    return true
  } else if (num1 % 2 === 0 || num2 % 2 === 0){
    return true;
  }
  return false;
}

// Write a function called "isEitherEvenAndLessThan9".
// Given two numbers, 'isEitherEvenAndLessThan9' returns
// whether at least one of them is even, and, both of them are less than 9.
function isEitherEvenAndLessThan9(num1, num2) {
  // your code here
  if( num1 % 2 === 0 || num2 % 2 === 0 ) {
      if ( num1 < 9 && num2 < 9 ) {
      return true;
    }
  }
  return false;
}

// Given two objects, "extend" adds properties from
// the 2nd object to the 1st object.
// Notes:
// * Add any keys that are not in the 1st object.
// * If the 1st object already has a given key,
// ignore it (do not overwrite the property value).
// * Do not modify the 2nd object at all.
function extend(obj1, obj2) {
  // your code here
  for ( var key in obj2 ) {
    if( !obj1.hasOwnProperty(key) ) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}

// Write a function called "removeNumbersLargerThan".
// Given a number and an object, "removeNumbersLargerThan"
// removes any properties whose values are numbers
// greater than the given number.
function removeNumbersLargerThan(num, obj) {
  // your code here
  for ( var key in obj ) {
    if( obj[key] > num ) {
      delete obj[key];
    }
  }
  return obj;
}

// Write a function called "removeNumbersLessThan".
// Given a number and an object, "removeNumbersLessThan"
// removes any properties whose values are numbers
// less than the given number.
function removeNumbersLessThan(num, obj) {
  // your code here
  for ( var key in obj ) {
    if( obj[key] < num ) {
      delete obj[key];
    }
  }
}

// Write a function called "removeStringValuesLongerThan".
// Given an number and an object, "removeStringValuesLongerThan"
// removes any properties on the given object whose values are
// strings longer than the given number.
function removeStringValuesLongerThan(num, obj) {
  // your code here
  for ( var key in obj ) {
    if ( obj[key].length > num ) {
      delete obj[key];
    }
  }
}

// Write a function called "removeEvenValues".
// Given any object, "removeEvenValues" removes
// any properties whose values are even numbers.
// Do this in place and return the original object,
// do not construct a cloned object that omits the properties.
function removeEvenValues(obj) {
  // your code here
  for ( var key in obj ) {
    if( obj[key] % 2 === 0 ) {
      delete obj[key];
    }
  }
  return obj;
}

// Write a function called "countNumberOfKeys".
// Given an object, "countNumberOfKeys" returns
// how many properties the given object has.
function countNumberOfKeys(obj) {
  // your code here
  var countKeys = 0;
  for ( var key in obj ) {
    countKeys ++;
  }
  return countKeys;
}

// Write a function called "removeOddValues".
// Given an object, "removeOddValues" removes
// any properties whose valuse are odd numbers.
function removeOddValues(obj) {
  // your code here
  for ( var key in obj ) {
    if ( obj[key] % 2 === 1 ) {
      delete obj[key];
    }
  }
  return obj;
}

// Write a function called "removeArrayValues".
// Given an object, "removeArrayValues" removes
// any properties whose values are arrays.
function removeArrayValues(obj) {
  // your code here
  for ( var key in obj ) {
    if( Array.isArray(obj[key])) {
      delete obj[key];
    }
  }
  return obj;
}

// Write a function called "removeNumberValues".
// Given an object, "removeNumberValues" removes
// any properties whose valuse are numbers.
function removeNumberValues(obj) {
  // your code here
  for ( var key in obj ) {
    if ( typeof obj[key] === 'number') {
      delete obj[key];
    }
  }
  return obj;
}

// Write a function called "removeStringValues".
// Given an object, "removeStringValues"
// removes any properties on the given
// object whose values are strings.
function removeStringValues(obj) {
  // your code here
  for ( var key in obj ) {
    if( typeof obj[key] === "string") {
      delete obj[key];
    }
  }
  return obj;
}

// Write a function called "convertDoubleSpaceToSingle".
// Given a string, "convertDoubleSpaceToSingle" returns
// the passed in string, with all the double spaces converted
// to single spaces.
function convertDoubleSpaceToSingle(str) {
  // your code here
  str = str.split(' ').filter(word => {
    if(word) {
      return word;
    }
  })
  return str.join(' ');
}

// Write a function called "joinThreeArrays".
// Given three arrays, "joinThreeArrays" returns
// an array with the elements of "arr1" in order
// followed by the elements in "arr2" in order
// followed by the elements of "arr3" in order.
function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  return arr1.concat(arr2.concat(arr3));
}

// Write a function called "addToFrontOfNew".
// Given an array and an element, "addToFrontOfNew"
// returns a new array containing all the elements of
// the given array, with the given element added to the front.
// Important: It should be a NEW array instance,
// not the original array instance.
function addToFrontOfNew(arr, element) {
  // your code here
  let newArr = arr.slice();
  newArr.unshift(element);
  return newArr;
}

// Write a function called "addToBackNew".
// Given an array and an element, "addToBackNew"
// returns a clone of the given array, with the
// given element added to the end.
// Important: It should be a NEW array instance,
// not the original array instance.
function addToBackOfNew(arr, element) {
  // your code here
  let newArr = arr.slice();
  newArr.push(element);
  return newArr;
}

// Write a function called "getAllElementsButNth".
// Given an array and an index, "getAllElementsButNth"
// returns an array with all the elements but the nth.
function getAllElementsButNth(array, n) {
  // your code here
  array.splice(n, 1);
  return array;
}

// Write a function called "areValidCredentials".
// Given a name and a password, "areValidCredentials",
// returns true if the name is longer than 3 characters,
// AND, the password is at least 8 characters long.
// Otherwise it returns false.
function areValidCredentials(name, password) {
  // your code here
  if(name.length > 3 && password.length >= 8 ) {
    return true;
  }
  return false;
}

// Write a function called "getIndexOf".
// Given a character and a string, "getIndexOf"
// returns the first position of the given character
// in the given string.
// Notes
// * Strings are zero indexed, meaning the first character
// in a string is at position 0.
// * When a string contains more than one
// occurrence of a character, it should return
// the index of its first occurrence.
// * If the character does not exist in
// the string, it should return -1.
// * Do not use the native indexOf
// function in your implementation.
function getIndexOf(char, str) {
  // your code here
  var strIndex = [];
  str = str.split('');
  str.forEach(function(word, index) {
      if( word === char ) {
        strIndex.push(index);
      }
  });
  return strIndex.length > 0 ? strIndex[0] : -1;
}

// Write a function called "findMinLengthOfThreeWords".
// Given 3 words, "findMinLengthOfThreeWords" returns
// the length of the shortest word.
function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var shortestLength = word1;
  for ( var key in arguments) {
    if(arguments[key]. length < shortestLength.length) {
      shortestLength =  arguments[key];
    }
  }
  return shortestLength.length;
}

// Write a function called "findMaxLengthOfThreeWords".
// Given 3 words, "findMaxLengthOfThreeWords" returns
// the length of the longest word.
function findMaxLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var longest = word1;
  for ( var key in arguments ) {
    if(arguments[key].length > longest.length) {
      longest = arguments[key];
    }
  }
  return longest.length;
}

// Write a function called "getElementsThatEqual10AtProperty".
// Given an object and a key, "getElementsThatEqual10AtProperty"
// returns an array containing all the elements of the array
// located at the given key that are equal to ten.
function getElementsThatEqual10AtProperty(obj, key) {
  // your code here
  var arr10 = [];
  if( Array.isArray(obj[key])) {
      obj[key].forEach(num => {
      if ( num === 10 ) {
        arr10.push(num);
      }
    })
    return arr10;
  }
  return arr10;
}

// Write a function called "select".
// Given an array and an object, "select"
// returns a new object whose properties
// are those in the given object AND whose
// keys are present in the given array.
function select(arr, obj) {
  // your code here
  let newObj = {};
  arr.forEach( letter => {
    for ( var key in obj ) {
      if ( letter === key) {
        newObj[letter] = obj[key];
      }
    }
  })
  return newObj;
}
