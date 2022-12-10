/*
Data types
*/

// Data Types
// ---------------------
// var name = "Jane";                      // string
// var age = 18;                           // number 
// var truth = false;                      // boolean

// Structures
// ---------------------
// var age = 32                                    //variable
// var sheets = ["HTML","CSS","JS",1,2,3];         // array
// var name = {first:"Jane", last:"Doe", age:1};   // object

// Definitions
// ---------------------
// var a = null;                           // value null
// var a; typeof a;                        // undefined



/*
Declarations
*/

// var = "global"
var firstName = "Cesar";
// let = "local"
let lastName = "Flores";
// const = "cannot change"
const birthday = "June 3, 1988";

// Print firstName
console.log(firstName);
console.log("Cesar");

// Boolean
var adult = true;
console.log("Is Cesar an adult: " + adult);

// If Statements
Cesar = 32;
Rosie = 1.2;

function isLegal(customer) {
    if(customer<21) {
        console.log("Sorry, I can't sell you any alcohol.")
    }
    else {
        console.log("Yes, I can sell you alcohol.")
    }
} 

isLegal(Cesar);
isLegal(Rosie);

// Function that greets each user
let users = ["Cesar", "Julio", "Cynthia", "Maggie"];

function greet(array) {
    for (let i=0; i<array.length; i++) {
        let name = array[i];
        console.log("Hello " + name + "!")
    }
}
greet(users);


// Undefined
let undefinedExample;
console.log(undefinedExample);

// Cesar

