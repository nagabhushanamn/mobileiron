"use strict"


// var person = {
//     name:''
// };

// if (person.name) {
//     console.log('name property exist...');
// }

// if ("name" in person) {
//     console.log('name property exist...');
// }

//---------------------------------------

//  var person = {
//     name:'Nag'
//  };
// // Object.defineProperty(person, 'name', {configurable:false,writable:false});
// // Object.defineProperties()


// // delete person.name;
// person.name = "";


//---------------------------------------

// var person = {
//     name: 'Nag',
//     age: 32
// };

// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);

// person.prop1 = "abc";
// delete person.age; 
// person.name = "asdasd";

//---------------------------------------


// var person = {
//     _name: 'Nag',
//     set name(name) {
//         console.log('set name');
//         if (name) {
//             this._name = name;
//         }
//     },
//     get name() {
//         console.log('get name');
//         return this._name;
//     }
    
// };

// person.name = "Ria"; // set
// console.log(person.name); // get




