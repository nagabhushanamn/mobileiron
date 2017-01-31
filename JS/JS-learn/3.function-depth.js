/*

     in js-lang , we can create function-obj in 2 ways

     way-1 : function declaration ( Named function )

            always get hoist with function-obj ,
            ==>function-obj created at context-creation phase
            
            when to use : to have function always in-context

     way-2 : function expression ( anonumous functions)

             ==>function-obj created at context-execution phase
             
             when to use : to create function based on need;


*/

// way-1 : function declaration
//-----------------------------

// console.log(add(12, 13));

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12, 13));


// way-2 : function expression
//----------------------------

// console.log(add(12, 13));

var arith = '+';

arith = function (n1, n2) {
    return n1 + n2;
}
arith = function (n1, n2) {
    return n1 - n2;
}

// console.log(add(12, 13));

//--------------------------------------------------------




// functions as values

// function sayHello() {
//     console.log('hello...');
// }

// var sayHi = sayHello;

// sayHi();

//--------------------------------------------------------

// function as args


// function greet(f) {
//     if (f) {
//         f();
//         return;
//     }
//     console.log('hello');
// }
// greet();
// greet(function () { console.log('Ola..');});



// var nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// // nums.sort();
// nums.sort(function (a, b) { return a - b; });
// console.log(nums);

//--------------------------------------------------------

// function teach() {
//     //...
//      function learn() {
//         //..
//      }
//      return learn;
// }

// teach()();

//--------------------------------------------------------



// function args


// function f(a,b) {
//     console.log('f() called..');
//     console.dir(arguments);
//     return arguments[0] +" "+arguments[1];
// }

// console.log(f(12,13,14,15));


// function sum() {
//     var result = 0,
//         len = arguments.length,
//         i = 0;
//     while (i < len) {
//         result += arguments[i];
//         i++;
//     }
//     return result;
// }


// function getFood() {
//     console.log('No food');
// }

// function getFood(money) {
//     console.log('Biryani');
// }

// getFood();

//------------------------------------------