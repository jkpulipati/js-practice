//HOISTING - all the variable declarations and function declarations will be moved towards the top
var empName;
var empSal;
var bar;
function foo() {
    // service calls
    console.log('from foo function');
}
console.log('before declartion ', empName, empSal);

empName = 'jk';
empSal = 123123;

console.log('after declartion ', empName, empSal);

foo();

bar(); // error, bar is not a function

bar = function() {
    console.log('from bar function');
};

// inner functions

function foo() {
    console.log('from jk', name);
    var name = 'jk';
    console.log('after declaring', name);

    bar();

    function bar() {
        console.log('from bar function');
    }

    var test = function() {
        console.log('from test function');
    }
    test();
}
foo();

// functions are heiher order functions

/**
 * function can return a function
 * fuction can accept a function as an argument
 *
 * functional programming
 */

Array.isArray([1, 2, 3]); // to check a value is an array

function foo(func) {

    console.log(func, typeof func);

    function test() {
        console.log('from test');
    }

    return test;
}

function funct() {
    console.log('from funct function');
}

var res = foo(funct);

res();


var empname = 'krishna';
function test() { // scope = current scope + global scope
    var empname;
    console.log(empname); // undefined
    empname = 'jk';
    console.log(empname); // jk
}

test();



foo();
function foo() {
    var name;
    function bar() {
        console.log('from bar '); // from bar
    }
    console.log(name); // undefined
    name = 'jk';

    console.log(name); // jk
    bar();


}
var name = 'krishna';



console.log(empName); // undefined
var empName = 'krishna';
console.log(empName); // krishna

test();
function test() {
    var name;

    console.log(name);

    name = 'something';

    console.log(name);
}

var test;
test = function() { // func expression
    console.log('from test function');
}

test();

function foo() {
    console.log(name);  // undefined
    var name = 'krishna';
    console.log(name);  // krishna
    name = 'jk';
    console.log(name); // jk
    bar(); // error
    test(); // jk
    var bar = function () {
        console.log('from bar');
    }
    function test() {
        console.log(name);
    }
}

foo();










































