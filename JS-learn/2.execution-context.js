
// "use strict"

/*
 
  Execution-Context ( scope )
  ---------------------------
 
    ==> memory with args and locals to execute instructions given in func.
    
    Execution-Context : 2 phases

    phase-1 : context-creation
    ---------------------------

    ==> all variables declared any-where will get hoisted(lifting-up) to top
    with default value ( undefined )
    
    phase-2 : context-execution
    ---------------------------
    
    ==>instructions will execute in sequence
     
     imp-note:

     by default every js-runtime has one 'global-execution-context'
     and one global-obj.

     
     global-object

     browser ==> window
     node.js ==> process

    global-context always executed by 'global-object'


    all global variables will become properties of global-obj
    at global-context creation phaase.


    every function-invocation also creates
    new-context which is child of above-context;

 */


// console.log(a);
// var a = 12;


// var a = 12;

// function f1() {
//     function f2() {
//         console.log(a);
//     }
//     //f2();
//     var a = 13;
//     return f2;
// }

// var f2Func = f1();
// f2Func();

//---------------------------------

// function teach() {
//     // var notes = ".js notes";
//     function learn() {
//         // var notes = ".js notes";
//         console.log(notes);
//     }
//     return learn;
// }

// var learnFunc = teach(); // child of global-context
// learnFunc(); // child of teach-context

// var notes = ".js notes";

//---------------------------------


// function f() {

//     {
//         var a = 100;
//     }

//     console.log(a);    
// }

// f();

//---------------------------------

// function f() {
//     "use strict"
//      ii = 10;
// }

// f();


//---------------------------------