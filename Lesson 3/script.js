// Different Types of Structures/Organization -- Part 2

// Arrays
const cars = ["Saab", "Volvo", "BMW"];

console.log(cars);

// Accessing Arrays with indexes
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
// console.log(cars[3]); --> This is undefined.

// Update arrays
var names = ['Julio', 'Cesar', 'Maggie', 'Cynthia'];
console.log(names);

names[4] = 'Rosie';
console.log(names);

names[1] = 'Brek';
console.log(names);

// Array methods
names.push('Leo', 'Danny');
console.log(names);

console.log(names.pop());
console.log(names.length);

let sorted_names = names.sort();
console.log(sorted_names);