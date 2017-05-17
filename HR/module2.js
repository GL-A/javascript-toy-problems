// Write an assertEqual function from scratch.
// It should compare actual and expected
// values with strict equality (not typecasting).
function assertEqual(actual, expected, testName) {
  // your code here
  if( actual === expected ) {
    console.log('passed');
  } else {
    console.log('FAILED ' + testName + ' expected: ' +
    expected + ' inestead got ' + actual);
  }
}
assertEqual(6, 4, 'multiplyByTwoTest');

// Write an "assertArraysEqual" function from scratch.
// Assume that the arrays in question contain only
// scalar values (i.e., simple values like strings or numbers).
// Do not use JSON.stringify(), Array.join(), or any other
// "convert the array to a string so I can compare two strings"
// type of technique to implement this.
// Examples
function assertArraysEqual(actual, expected, testName) {
  // your code here
  var arr1 = actual.slice(0);
  var arr2 = expected.slice(0);
 for ( var x = arr1.length; x >= 0; x--) {
     if( arr1[x] === arr2[x] ) {
       arr1.splice(x, 1);
       arr2.splice(x, 1);
     }
   }
   if( arr1.length === 0 && arr2.length === 0 ){
     console.log('passed');
   } else {
     console.log('FAILED ' + testName + 'expected: ' + expected + ' instead got ' + actual);
   }
}
var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
var actual = 'broken'.split('');
// var expected = [1, 1, 2, 3, 5, 8, 13];
// var actual = [1, 1, 2, 3, 5, 8, 43, 5];
assertArraysEqual(actual, expected, 'assertArrayTest');

// Write an "assertObjectsEqual" function from scratch.
// Assume that the objects in question contain only scalar
// values (i.e., simple values like strings or numbers).
// It is OK to use JSON.stringify().
// Note: The examples below represent different use
// cases for the same test. In practice, you should
// never have multiple tests with the same name.
function assertObjectsEqual(actual, expected, testName) {
  // your code here
  var check = 0;
  if ( Object.keys(actual).length ===  Object.keys(expected).length) {
    for ( var key in actual ) {
      if( actual[key] === expected[key] ) {
        check ++;
      }
    }
    if( Object.keys(actual).length === check ) {
          console.log('passed');
    }
  }
  console.log('FAILED ' + testName + ' expected: ' + JSON.stringify(expected) + ' instead got ' + JSON.stringify(actual));
}
// var expected = {foo: 5, bar: 6};
// var actual = {foo: 5, bar: 6}
var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, 'detects that two objects are equal');


// Write an "assertWithinRange" function from scratch.
// The idea here is similar to when someone says,
// "Give me a number between 1 and 5".
// You usually think the possible answers are
// "1, 2, 3, 4, or 5".  I.e., you usually don't
// interpret the options as being "2, 3, or 4".
// Notes
// * Assume that the "actual" and "expected"
// arguments are always numbers (e.g., not booleans or
//   other types that don't make sense in the
//   context of examining a "range".)
function assertWithinRange(low, high, actual, testName) {
  // your code here
  if ( actual >= low && actual <= high ) {
    console.log( 'passed' );
  } else {
    console.log( 'FAILED ' + testName + ': ' + actual + ' should be between: ' + low + ' and ' + high )
  }
}
var blackjackScore = 24;
assertWithinRange(4, 21, blackjackScore, 'blackjackScoreTest');
// var price = 101;
// assertWithinRange(1, 100, price, 'price should be between 1 and 100');


// Write an "assertEqual" function from scratch, from memory.
// Please DO NOT simply PASTE in from before.
// If you have to go back and look at your previously-implemented
// code once, fine, but come back here and write it from memory.
// Then use your assertion function in a series of test
// cases to thoroughly test the code.
function square(n) {
  return n * n;
}
function assertEqual(actual, expected, testName) {
  // your code here
  var testOutput = square(actual);
  if ( testOutput === expected ) {
    console.log( 'Passed' );
  } else {
    console.log('FAILED ' + testName + ' expected: ' + expected + ' instead got ' + testOutput);
  }
}
assertEqual(5, 25, 'assertEqualTest');
assertEqual(56, 275, 'assertEqualTest');


// Write an "assertEqual" function from scratch, from memory.
// Please DO NOT simply PASTE in from before.
// If you have to go back and look at your previously-implemented
// code once, fine, but come back here and write it from memory.
// Then use your assertion function to thoroughly test the code.
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;
  array.forEach(function(element, index) {
    if(element !== callbackFunction(element, index)) {
      doesEveryElementMatch = false;
    }
  });
  return doesEveryElementMatch;
}
function assertEqual(actual, expected, testName) {
  // your code here
  var callbackFunction = function( e, index ){
    if(expected[index] === e){
      return e;
    } else {
      return false;
    }
  };
  var testResult = every( actual, callbackFunction );
  if ( testResult === true ) {
    console.log( 'passed' );
  } else {
    console.log( 'FAILED' + testName + ' expected: ' + expected + ' instead got ' + actual );
  }

}
assertEqual([1, 33, 3], [1, 3, 3], 'assetEqualTest');
assertEqual([1, 3, 3], [1, 3, 3], 'assetEqualTest');


// Write an "assertArraysEqual" function from scratch, from memory.
// Please DO NOT simply PASTE in from before.
// If you have to go back and look at your previously-implemented
// code once, fine, but come back here and write it from memory.
// Then use your assertion function to thoroughly test BOTH
// the functions in the provided code.
// Use categorical reasoning to consider all the useful cases.
function map(array, callbackFunction) {
  var newArray = [];
  array.forEach(function(element) {
    newArray.push(callbackFunction(element));
  });
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n;
  });
}

function assertArraysEqual(actual, expected, testName) {
  // your code here
  var areEqualLength = actual.length === expected.length;
  var areEqualItems = actual.every(function(item, i) {
    return item === expected[i];
  })
  if (areEqualLength && areEqualItems) {
    console.log('passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}
assertArraysEqual(cubeAll([1,2,3]), [1,4,3], 'assertArraysTest');
assertArraysEqual(cubeAll([4,5,10]), [16,25,100], 'assertArraysTest');


// Write an "assertObjectsEqual" function from scratch, from memory.
// Please DO NOT simply PASTE in from before.
// If you have to go back and look at your previously-implemented code
// once, fine, but come back here and write it from memory.
// Then use your assertion function to thoroughly test the function provided.
// Use categorical reasoning to consider all the useful cases.
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj['lastName'];

  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }

  return obj;
}

function assertObjectsEqual(actual, expected, testName) {
  // your code here

  if ( actual['fullName'] === expected ) {
    console.log('passed');
  } else {
    console.log( 'FAILED ' + testName + ' expected ' + expected + ' instead got ' + actual.fullName)
  }
}
var obj = {
  firstName: "George",
  lastName: "Lopez"
};
assertObjectsEqual(addFullNameProp(obj), 'George Lopez', 'ObjectFullNamTest');
assertObjectsEqual(addFullNameProp({}), 'George Lopez', 'ObjectFullNamTest');
assertObjectsEqual(addFullNameProp({
  firstName: 'Pablo',
  lastName: 'Montero'
}), 'George Lopez', 'ObjectFullNamTest');


// Use the skeleton provided to write a working implementation.
// Notes:
// * Do not leave any functions in the skeleton unused.
// * Test that your implementation works.
// Specifically -- your code reviewer should be able to
// just press the [Run] button and see convincing evidence
// that your code works, because of:
// a) the categorical reasoning displayed by your tests
// b) the line(s) of output in the console log saying
// "passed" coming from those tests
function average(numbers) {
  // process array of numbers
  return sum(numbers) / numbers.length;
}
function sum(numbers) {
  return numbers.reduce( ( a, b ) => {
    return a + b;
  });
}
function assertAverage( actual, expected, testName ) {
  if ( actual === expected ) {
    console.log('passed');
  } else {
    console.log( 'FAILED ' + testName + ' expected: ' + expected + ' instead got ' + actual);
  }
}
assertAverage( sum([1,2,3]), 6, 'arraySumTest');
assertAverage( average([1,2,3]), 2, 'arrayAverageTest');

// Convert from a flat class list of names to an
// object literal decorated with an age for each student.
// The ages should be randomly generated for each
// student, either age 10 or age 11.
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  // your code here
  var newClassList = [];

  classList.forEach( e => {
    var studentObj = {
      name: e,
      age: getRandomIntInclusive(10, 11)
    };
    newClassList.push(studentObj);
  });

  return newClassList;
}
decorateClassListWithAges(["Joe", "Jack", "John"]);

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Write and test a function that determines whether a string is an isogram.
// Notes:
// * Assume your input is only letters.
// * Assume the empty string is an isogram.
// * Ignore case.
// * Follow the pseudocode exactly!
function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  let newText = text.split('');
  newText = newText.map( letter => {
    return letter.toLowerCase();
  });
  newText = new Set(newText);
  return (newText.size === text.length);
}
isIsogram('pablescor');
