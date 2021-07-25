/**
 * * Closures: inner function can still access the outer function scope, eventhough the outer function has
 * * finished it's execution
 *  */

// nested functions - function inside a function

function outer() {
    var name = 'jk';
    console.log('from outer function', name);

    // nested function
    function inner() {
        console.log('from inner function', name);
    }

    return inner;
}

var innerFunc = outer();

innerFunc();

function sum(a) {
    return function (b) { // closure
        return function (c) {
            return a + b + c;
        }
    }
}

var sumFunc = sum(1);
var sumFuncFinal = sumFunc(2);
sumFuncFinal(4);

sum(1)(4)(9); // currying in js
