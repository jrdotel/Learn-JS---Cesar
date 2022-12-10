// Different Types of Structures/Organization

// Variables
var number = 123;
var string = "123";
var boolean = true;
var boolean_string = "true";

console.log(typeof(number));
console.log(typeof(string));
console.log(typeof(boolean));
console.log(typeof(boolean_string));

// Strings are 'strung' together:
var strings_numbers_chars = "1a%c2B&xh"
console.log(string.length);
console.log(boolean_string.length);
console.log(strings_numbers_chars.length);

// How strings work in JS
var number_string_1 = "3";
var number_string_2 = "2";

console.log(number_string_1 + number_string_2); // Guess = 5; Answer = 32;

var number_1 = 3;
var number_2 = 2;

console.log(number_1 + number_2); // Guess = 5; Answer = 5;

var number_string_1 = "3";
var number_string_2 = "2";

console.log(Number(number_string_1) + Number(number_string_2)); // Guess = 5; Answer = 5;
// Example of NaN:
console.log(Number("Cesar"));
console.log(Number("five"));

// This is called concatanation.
var first_name = "Cesar";
var last_name = "Flores";
 // The wasy concatenation works is that it links strings together:
 console.log(first_name + " " + last_name + " is a hacker!"); // This will concatenate(link) the strings together

 // Utilizing a string's value for a boolean test case.
var age = "";

// I asked the user their age:
// This was their response:
age1 = "18";
age2 = "22";

console.log(age1 > "21");
console.log(age1 > 21);

console.log(age2 > "21");
console.log(age2 > 21);