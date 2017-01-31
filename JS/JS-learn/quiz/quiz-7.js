// function func() {
//     throw new Error('i hate .js');
// }

// function teach() {
//     var name = 'Nag'; // moved to heap
//     var i = 100;
//     try {
//         console.log('teach start...');
//         //func(); // synch
//         setInterval(function () { 
//             console.log('after timeout..');
//             //throw new Error('i hate .js');
//             console.log('learning .js from ' + name);
//             // eval('console.log(i)');
//         },2000);
//         console.log('teach end...');
//     } catch (e) {
//         console.log('i caught error :' + e.message);
//     }
// }
// teach();

//-----------------------------------------------------


function start(arg) {
    var local = 10

    function inner() {
        console.log(arg);
        console.log(this.local);
    }
    // inner();
    //return inner;
    setInterval(inner, 2000);
}

start(20);

//-----------------------------------------------------