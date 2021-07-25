// this - global js object

var empName = 'jk'; // this.empName = 'jk';
console.log(this.empName);

function foo(arr) {
    console.log('from function foo', this, arr);
}

foo(); // from function foo window undefined

// apply, call and bind - ways of executing a function by replacing the value of this

var obj = {
    name: 'krishna'
};

foo.apply(obj, [1, 2, 3, 4]); // from function foo {name: 'krishna}
foo.call(obj, 1, 2, 3);
var func = foo.bind(obj, 1, 2);
func();

foo.apply(null, [1, 2, 3]); // passed null so, this will points to global js object
foo.call(null, 1, 2, 3); // passed null so, this will points to global js object
foo.bind(null, 1, 2, 3); // passed null so, this will points to global js object

/**
 * ! by default this - window
 * ! apply, call, bind
 * ! js property contains a function (method) - this
 * ! obj.foo(); // obj
 * ! var fooFunc = obj.foo; // global/window
*/
