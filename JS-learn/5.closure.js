/*

A closure is a function having access to the parent scope,
even after the parent function has closed.


why/where we use closures ?

 ==> to abstract public behav of any module to other modules
 ==> when executing func async being closure can able access parent-scoped data


*/

function teach(sub) {
    console.log('teaching ' + sub);
    var notes = sub + " notes";
    var i = 100;

    function learn() {
        console.log('learning' + sub + ' with ' + notes);
    }

    function inner() {
        console.log(sub);
    }
    // inner();

    console.log('teaching end');

    return learn;
}

var learnFunc = teach('.js'); // teach-context with args & locals
learnFunc();
learnFunc();
learnFunc();

learnFunc = null;