// var person = {
//     name: 'Nag',
//     saName: function () {
//         //..
//     }
// };

// // es6
// var person = {
//     name: 'Nag',
//     saName() {
//         //..
//     }
// };


// var name = 'Nag'; var age = 32;

// var person = {
//     name: name,
//     age:age
// };

// // es6

// var person = {
//     name,
//     age
// };



var prop = "name";

var person = {
    ['mi-' + prop]: 'Nag',
    'say Name'() {
        //...
    }
};

console.log(person['mi-name'])
person['say Name']();








