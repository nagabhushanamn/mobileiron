

// var person = {
//     [Symbol.for('mobileiron')]:'Nag'
// };

// var emp = {
//     [Symbol.for('mobileiron')]:'Emp'
// };


// console.log(person[Symbol.for('name')]);

//---------------------------------------



function Person() {
    //..
}
Person.prototype[Symbol.toStringTag] = "Person";

var p = new Person();