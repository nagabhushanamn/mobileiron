

function Person(name, age) {
    this.name = name;
    this.age = age;
   
    // var self = this;
    // setInterval(function () {
    //     self.age++;
    //     console.log(self.name+"==>"+self.age);
    // }, 1000);

    var incAge = () => { this.age++; console.log(this.age); };
    setInterval(incAge,1000);

}

new Person('Ria', 0);