(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


function greet() {
    console.log('Hello...');
}


module.exports = greet;
},{}],2:[function(require,module,exports){


function greet() {
    console.log('Ola...');
}


module.exports = greet;
},{}],3:[function(require,module,exports){
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
},{"./en":1,"./es":2}],4:[function(require,module,exports){

console.log('main.js');

var greet=require('./greet');
greet.greet('es');
},{"./greet":3}]},{},[4]);
