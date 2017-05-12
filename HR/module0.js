Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:
1) the first element of the array as the object's key, and
2) the last element of the array as that key's value.

Example input:
['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']

Function's return value (output):
{
  Queen : 'Beyonce'
}

Do not change the input array. Assume all elements in the input array will be of type 'string'.

Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.

E.g. it should handle input like:
['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']

Function's return value (output):
{
  Kevin : 'Spacey'
}

Starter Code

function transformFirstAndLast(array) {
  // your code here
  var key = array[0];
  var value = array[array.length - 1];
  var obj = {};
  obj[key] = value;
  return obj;
}




Write a function called "getAllKeys" which returns an array of all the input object's keys.
Example input:
{
  name : 'Sam',
  age : 25,
  hasPets : true
}

Function's return value (output) :
['name', 'age', 'hasPets']

Do not use "Object.keys" to solve this prompt.

Note that your function should be able to handle any object passed in it.

E.g. it should also handle an input like:
{
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}

Function's return value (output):
['a', 'number', 'hungry', 'grammyWins']'
Starter Code:

function getAllKeys(obj) {
  // your code here
  var answer = [];
  for(property in obj){
    answer.push(property);
  }
  return answer;
}


Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

Example input:
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

Function's return value (output):
{
  make : 'Ford'
  model : 'Mustang',
  year : 1964
}

Do not change the input string. Assume that all elements in the array will be of type 'string'.

Note that the input may have a different number of elements than the given sample.
For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

Starter Code:'
function fromListToObject(array) {
  // your code here
  var obj = {};
  array.map(a => {
    return obj[a[0]] = a[1];
  })
  return(obj);
}


Write a function called "listAllValues" which returns an array of all the input object's values.

Example input:
{
  name : 'Krysten',
  age : 33,
  hasPets : false
}

Function's return value (output):
['Krysten', 33, false]

Note that the input may have a different number of keys and values than the given sample.

E.g. it should also handle an input like:
{
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}

Function's return value (output):
['a', 11, true, 1]

Starter Code
function listAllValues(obj) {
  // your code here
  var answer = [];
  for (var keys in obj){
    answer.push(obj[keys]);
  }
  return(answer);
}



Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample.

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :
function transformEmployeeData(array) {
  // your code here
  var answer = [];
  array.map(arr => {
    var obj = {};

    arr.map(a => {
      obj[a[0]] = a[1];
    })
    answer.push(obj);
}


Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]

Note that your function should be able to handle ANY object like this, not just the exact sample provided above.

E.g., it should also be able to handle this, or any other object containing simple key-value pairs.
{
  species: 'canine',
  name: 'Bowser',
  weight: 45
}

answer: function convertObjectToList(obj) {
  // your code here
  var answer = [];
  for(var key in obj){
    var temp = [];
    temp.push(key, obj[key]);
    answer.push(temp);
  }
  return(answer);
}



Write a function called "greetCustomer".

Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant.  Please refer to the customerData object.

The greeting should be different, depending on the name on their reservation.

Case 1 - Unknown customer ( Name is not present in customerData ):

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

Case 2 - Customer who has visited only once ( 'visits' value is 1 ):

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'

Notes:
* Your function should not alter the customerData object to update the number of visits.
* Do not hardcode to the exact sample data. This is a BAD IDEA:


if (firstName === 'Joe') {
  // do something
}

Starter Code :
var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';

  // your code here
  if(customerData.hasOwnProperty(firstName)){
	  if(customerData[firstName].visits > 1){
	    return greeting + firstName + '! So glad to see you again!';
	  }
	  if(customerData[firstName].visits === 1){
	    return greeting + firstName + "! We're glad you liked us the first time!"
	  }
	}
  return 'Welcome! Is this your first time?';
}
