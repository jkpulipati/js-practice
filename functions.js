// functions - to perform an action/task

// in JS, 2 diff ways of creating a function - function declaration, function expression.

// function declaration
// parameters/arguments
function sum(num1, num2) {
    // logic
    console.log(num1, num2);

    // action

    // result

    return 2;

    // stmts
};

// execution
// sum(1, 2);

// array
var arr = [1, 2, 3, 4];
// replace 4 value with 5

function replaceValueInArray(actualValue, replaceValue) {
    var index = arr.indexOf(actualValue);
    if (index !== -1) {
        arr[index] = replaceValue;
    }
}

// replaceValueInArray(4, 5);
// replaceValueInArray(2, 3);


function sum(num1, num2) {
    var result = num1 + num2;
    return result;
}

var sumValue = sum(2, 4);
var res = sum(4, 4);

// function expression
var sum = function(num1, num2) {
    // logic
};

// sum(1, 2);

// arguments keyword, which will be accessible inside a function
function test() {
    console.log(arguments); // [2, 3, 4, 'test']
}
// test(2, 3, 4, 'test');


// scope of the variables - private, public

var empName = 'jk';
var name1 = 'krishna';
function foo() { // scope: current function scope + global scope
    var name1 = 'jk'; // private variable, local variables
    name1 = 'jk'; // public variable - override with public one
    console.log('from function foo');
    console.log('name of the variable ', name1, empName);
}

console.log('from outside of function foo ', name1); // Reference Error

foo();

console.log('after foo execution the name value', name1);
