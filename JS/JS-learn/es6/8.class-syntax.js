// es5

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {

}
Person.prototype.sayAge = function () {

}


function Employee(name, age, salary) {
    Person.call(this, name.age);
    this.salary=salary;
}
Employee.prototype = Person.prototype;


var e = new Employee('Nag',32,1000);


// es6

// class Person {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayName() {
//         console.log('im ' + this.name);
//     }
//     sayAge() {
//         console.log('im ' + this.age);
//     }

// }

