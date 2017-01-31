/*

 'this' ==> owner of exeution-context

*/


// whay we need 'this' keyword ?


// var person = {
//     myName: 'Nag', // obj's property
//     sayName: function () {
//         // console.log('im '+myName);
//         // console.log('im '+person.myName);
//         console.log('im ' + this.myName);
//     }
// };

// // person.sayName();

// var p = person;
// person = {
//     myName: 'Ria'
// };

// p.sayName();

//--------------------------------------------------


// var p1 = { name: 'Nag', sayName: function () { console.log('im ' + this.name); } };
// var p2 = { name: 'Ria', sayName: function () { console.log('im ' + this.name); } };

// function sayNameForAll() {
//     console.log('im '+this.name);
// }

// var p1 = { name: 'Nag', sayName: sayNameForAll };
// var p2 = { name: 'Ria', sayName: sayNameForAll };

// sayNameForAll(); // im ??  : function-invocation  ( this ==> global-obj )
// p1.sayName();  // im Nag   : method-invocation    ( this ==> invoker-obj)
// p2.sayName();  // im Ria


//--------------------------------------------------

// 1000+


// function Person(name,age) {
//     this.name = name;
//     this.age = age;
//     this.sayName = function () {
//         console.log('im '+this.name);
//     }
//     this.sayAge = function () {
//         console.log('im '+this.age+ " old");
//     }
// }


// var p1 = new Person('Nag', 32); // constructor invocation ( this ==> new-obj )
// var p2 = new Person('Ria',1);


//--------------------------------------------------


// third-party

var greetUtil = {
    sayName: function (message,from) {
        console.log(message+ ' im '+this.name+" : "+from);
    }
};


var p1 = { name: 'Nag' };
var p2 = { name: 'Ria' };

var e1 = { name: 'Emp1' };
var e2 = { name: 'Emp2' };


// dynamic function binding

// greetUtil.sayName.call(p1,"Hello","CHN");
// greetUtil.sayName.call(e1, "Dude", "HYD")


// greetUtil.sayName.apply(p1,["Hello","CHN"]);
// greetUtil.sayName.apply(e1, ["Dude", "HYD"])



// with args
// var newF = greetUtil.sayName.bind(p1, "Hello", "CHN");
// newF();

// without args
var newFF = greetUtil.sayName.bind(e1);
newFF('hi', 'universe');

//--------------------------------------------------

// in .js-nag , we can invoke func in 4ways

/*

  1. function invocation  ( this ==> global-obj )
  2. method invocation    ( this ==> invoker-obj)
  3. constructor invocation ( this ==> new-obj )
  4. call/apply/bind invocation ( this ==> arg-obj )


*/