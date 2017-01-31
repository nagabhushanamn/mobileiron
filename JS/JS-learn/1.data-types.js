/**
 *
 *    1. simple-types/primitives ==> values
 *    2. complex-types/references ==> objects
 *
 *
 */

// 1. Simple Types

/*

    a. string
    b. number
    c. boolean
    d. null
    e. undefined
    f. symbol ( es6 )

*/

// -------------------------------------

// a. string
var name = "Nag";
var selection = 'a';

// -------------------------------------

// b.number
var count = 10;
var cost = 10.10;

// -------------------------------------

// c. boolean
var found = true;

/**
 *   falsy value in .js-lang
 *
 *   false,0,"",null,undefined,NAN
 *
 */

// -------------------------------------

// d. undefined
var v;

// -------------------------------------

// e. null
var person = null;

// -------------------------------------


// Refeernce Types ==> objects


// how to create object in .js lang?

// syntax : var ref=new ConstructorFunction();

// -------------------------------------

// var person = new Object(); // creates obj wrapper
// person.name = 'Nag';
// person.age = 32;
// person.doWork = function () {
//     console.log('working...');
// }

// delete person.age;

// -------------------------------------

// Literal-style objects

// -------------------------------------

// 1. Object  : for configuration objcts

var person = new Object();
person.name = 'Nag';
person.age = 32;
person.doWork = function () {
    console.log('working...');
}

// or

var person = {
    name: 'Nag',
    age: 32,
    doWork: function(){
        console.log('working...');
    }
};


// -------------------------------------

// 2. Array

var arr = new Array();
arr.push('item-1');
arr.push('item-2');

// or

var arr = ['item-1', 'item-2'];

// -------------------------------------

// 3. RegExp

var ssn = new RegExp('\\d{3}-\\d{2}-\\d{4}');

// or

var ssn = /\d{3}-\d{2}-\d{4}/;

// -------------------------------------

// 4. Function

// imp-note : every function is an object


var add = new Function('n1', 'n2', 'var result=n1+n2;return result;');

// or

function add(n1, n2) {
    var result=n1+n2;return result;
}

add.prop1 = 12;
add.prop2 = 13;

add.m = function () { 

};

// --------------------------------------------------

// How to access .js obj properties ?

var person = {
    name: 'Nag',
    'full-name':'Nag N'
};

// person.name = 'Ria';
// console.log(person.name);
// console.log(person['name']);

person['full-name'] = "Nagabhushanam N";
console.log(person['full-name']);

// ----------------------------------------------------