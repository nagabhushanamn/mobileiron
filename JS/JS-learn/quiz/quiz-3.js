function startSession() {

    function Employee(name) {
        this.name = name;
    }

    function Trainer(name) {
        this.name = name;
        this.doTeach = function () {
            console.log(this.name + " teaching .js");
            var self = this;

            function doLearn() {
                console.log(this.name + " learning .js from " + self.name);
            }
            return doLearn;
        }
    }

    var nagTrainer = new Trainer('Nag'); // constructor-inocation
    var learnFunc = nagTrainer.doTeach(); // method-invocation


    var emp1 = new Employee("E1");
    var emp2 = new Employee("E2");

    learnFunc.call(emp1);  // call/apply/bind invocation
    learnFunc.call(emp2);


}

startSession(); // function-invocation