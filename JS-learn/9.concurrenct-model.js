// refer/run code on http://latentflip.com/loupe/


//sample-1

function foo(b) {
    var a = 10;
    return a + b + 11;
}

function bar(x) {
    var y = 3;
    return foo(x * y);
}

console.log(bar(7));


//sample-2

function foo() {
    throw new Error('oops');
}

function bar() {
    foo();
}

function baz() {
    bar();
}
baz();

//sample-3

function foo() {
    foo();
}
foo();


//sample-4

function big() {
    //..
    var i = 0;
    while (i < 10) {
        console.log('big.......');
        i++;
    }
}

function small() {
    console.log('small....');
}

big();
small();



// sample-6

/*

    <button type="button" class="odd">button-1</button>
    <button type="button" class="even">button-2</button>

*/

console.log('start.....');

$.on('.odd', 'click', function handler1() {
    console.log('handled click-event on .odd eleemnts');
});


$.on('.even', 'click', function handler2() {
    console.log('handled click-event on .even eleemnts');
});


var i = 0;
while (i < 100) {
    console.log('big.......');
    i++;
}

console.log('continue with other work....');


//-