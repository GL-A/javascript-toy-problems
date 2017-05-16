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
