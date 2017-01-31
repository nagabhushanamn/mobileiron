// console.log('greet.js');


var en = require('./en');
var es = require('./es');

function greet(lang) {

    if (lang == 'en') {
        en();
    }
    if (lang === 'es') {
        es();
    }

}

function sayName() {
    console.log('im Nag');
}

function internal() {

}

module.exports = {
    greet,
    sayName
};