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
