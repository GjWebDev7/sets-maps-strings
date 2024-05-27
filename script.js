'use strict';

// Sets
// Set is a collection of unique values.

const fruitSet = new Set(['apple', 'orange', 'apple', 'mango']);
console.log(fruitSet, typeof fruitSet); // Sets are Objects

console.log(new Set('Gaurav'));

// Adds a new element to the Set
fruitSet.add('Guava');
fruitSet.add('Guava');
console.log(fruitSet);

// 	Returns the number elements in a Set
console.log(fruitSet.size);

// 	Returns true if a value exists
console.log(fruitSet.has('Guava'));

// 	Removes an element from a Set
fruitSet.delete('Guava');
console.log(fruitSet);

for (const fruit of fruitSet) {
  console.log(fruit);
}

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// obtain unique elements from an array
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

// 	Removes all elements from a Set
fruitSet.clear();
console.log(fruitSet);

// Maps
// A Map holds key-value pairs where the keys can be any datatype.
const rest = new Map();
console.log(typeof rest); // Maps are Objects

// Sets the value for a key in a Map
rest
  .set('name', 'Classico Italian')
  .set(1, 'Delhi')
  .set(2, 'Bangalore')
  .set('open', 11)
  .set('close', 23)
  .set(true, 'open')
  .set(false, 'close');
console.log(rest);

// get() method gets the value of a key in a Map:
console.log(rest.get('open'));

// size property returns the number of elements in a Map:
console.log(rest.size);

// delete() method removes a Map element:
rest.delete(2);
console.log(rest);

// has() method returns true if a key exists in a Map:
console.log(rest.has(2));

// clear() method removes all the elements from a Map:
rest.clear();
console.log(rest);

// Create a map by passing an array to new Map()
const question = new Map([
  ['Question', 'Best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
]);
console.log(question);

// Strings
// Strings are for storing text
const airline = 'TAP Air Portugal';
const plane = 'A320';

// Extracting String Characters
console.log(plane[0]);
console.log(plane.charAt(0));
console.log('Gaurav'.charAt(0));

// length property returns the length of a string:
console.log(airline.length);

//indexOf() method returns the position of the string
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

// slice() extracts a part of a string
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(1, -1));

console.log(airline.slice(0, airline.indexOf(' '))); // extract 1st word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // extract last word

// Converting to Upper and Lower Case
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// solve
const email = 'hello@gaurav.io';
const badEmail = ' hELLo@GauRAV.iO  ';
//trim() method removes whitespace from both sides of a string
// trimEnd() removes whitespace only from the end of a string
// trimStart() removes whitespace only from the start of a string
const correctEmail = badEmail.toLowerCase().trim();
console.log(correctEmail === email);

//replace() method replaces a specified value with another value in a string:
const priceUSD = '288$';
const usdToInr = priceUSD.replace('$', '₹');
console.log(usdToInr);
//replaceAll()
const announcement =
  'All passangers come to boarding door 23, boarding door 23.';

console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const flight = 'A320neo';
console.log(flight.includes('A32'));
console.log(flight.startsWith('A3'));

// padding
const message = 'Hello';
console.log(message.padStart(10, '+'));
console.log(message.padEnd(10, '+'));

// If you want to work with a string as an array, you can convert it to an array.
// string can be converted to an array with the split() method://**
console.log('Gaurav jaiswal'.split(' '));

// join() method returns an array as a string.//**
const [firstName, lastName] = 'Gaurav jaiswal'.split(' ');
console.log(firstName, lastName);
const newName = ['Mr.', firstName, lastName].join(' ');
console.log(newName);
