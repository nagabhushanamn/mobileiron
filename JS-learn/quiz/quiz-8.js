

// context  vs  object(this)


/*

    globalcontext's data === global-object data if variabled declared with 'var' keyword

*/

// var v = 100;

// let vv = 100;

// function f() {
//     console.log(vv); // context's data
//     console.log(this.vv); // context's owner data
// }

// f();

//--------------------------


var person = {
    name: 'Nag',
    sayName: function () {
        var name = 'mi';
        console.log(name);
        console.log(this.name);
    }
};

person.sayName();
