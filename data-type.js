console.log("Hello world!");

// ? JavaScript 
// found in 1996 by Brandon eich
// cline side language (runs in the browser)
// interpreted language, not compiled
// first class function -- functions are treated like any other variable

// functional language

// object oriented language 
// prototype based
// imperative
// weekly typed
// multi paradim language
// ecma script organization setting language standsards

// ? comments
// blocks of code that are not being interpreted
// denoted by // for single line /* for multi
// comments are read but not executed
// as learners it helps us with note taking
// as devs it documents our code making it more maintainable

// console object
// fives us access to the browser or nodes debugging console
// allows the developer to view output from their program


// 2 + 2; runs but doesnt show in the console


console.log(2+2); // shows in the console

/* 
    data types:
        primitive
            * string
            * number
            * boolean
            * null
            * undefined
            * not a number (NaN)
            * 
        Reference
            * array
            * object
            * map
            * set
*/

/*
    ?strings
    *primitive data type representing characters
    * enclosed in ' '. "", or backtick?
    * 
    * */

    // string representation of a number
    console.log("2023");

    // we can concentrate different strings (adds them together)
    console.log("I'm Paul" + "and I'm 26 years old");

    // strings are indexed starting from zero (8)
    // index value goes between []
    // !strings are immutable (cannot be changed)
    console.log("sunffuhlufuhgus"[5]);

    /*
    string interpolation ( ` `)
    a process of including space for an expression
        syntax:
            `sting $ {expression} string
            */


console.log(`My name is Paul and I am ${20 + 6} years old`);

/*

? string methods
    * .length
    * .slice()
    * .toUpperCase()
    * .toLowerCase()
    * 
    * */

console.log("asdfjvnfhekfnvhedkj".length);
console.log("kurczek" .toUpperCase());
console.log("Steven Kurczek".slice(0,6));
console.log("Steven Kurczek".indexOf("K"));

/* multi-line strings - using escape character "\n"*/

console.log("Paul Niemczyk, \n 123 main St \n 312 555 8888");

/*
    Checking data types using typeof operator
    */

console.log(typeof 1998);

/*
    numbers
    Any integer or deciamal
    */

console.log(25);
console.log(3.14);
console.log(typeof 1776);
console.log(0.2 + 0.1);
console.log(Number.MAX_SAFE_INTEGER);






