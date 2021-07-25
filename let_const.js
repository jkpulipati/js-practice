let name = 'jk';
const pi = 3.14;

function foo() {
    console.log(name, name1); // undefined, undefined
    let name = 'jk';
    if (true) {
        console.log(name, name1); // jk undefined
        let name1 = 'krishna';
    }
    function bar() {
        console.log(name, name1); //
    }

    bar();
}
foo();


function bar() {
    let isExists = true;

    let isExists = false; // error
    if (isExists) {
        let empName = 'jk';
        console.log(empName, isExists);
    }
    console.log(isExists, empName);
}
bar();

// var is function level, let is block scope
// same variable names cannot be used for let and const will receive an error
// (variable name has already been declared)

const name; // error

const empName = 'jk';

empName = 'krishna';

function foo() {
    console.log(empName);
    const empName = 'jk';
}
foo();



