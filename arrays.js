var arr = [1, 2, 3, 'jk', 'test', true, false, null, undefined, 0, {name: 'jk'}];

var numbers = [1, 2, 3, 4];

var names = ['jk', 'test'];

var name = 'test';
var emp = {
    name: 'jk'
};
var emp1 = {
    name: 'test'
};

// CURD - operations
var arr = [];

// create - add values to array - push, unshift, splice

// it store values by using index based mechanism - [0, 1, 2, 3, 4, 5]
arr.push(2);
arr.push(22);
arr.push(17);
arr.push(24);

arr.unshift(1);
arr.unshift(0);

console.log(arr, arr.length);

arr.splice(3, 0, 4);
console.log(arr, arr.length);

// get values from array & get index from array
arr[0] //0
arr[3] //4
arr[35] //undefined
arr.indexOf(17); //5
arr.indexOf(177); //-1
arr.includes(17) // true
arr.includes(173) // false

// update values in specific positions
arr[3] = 3;

var index = arr.indexOf(2);
if (index !== -1) {
    arr[index] = 22;
}

// remove value at specific position by using index - pop, shift, splice
var arr = [1, 2, 3, 100, 4, 0];

arr.pop(); // removes the last element
arr.shift(); // remove the first element

var index = arr.indexOf(100);
if (index !== -1) {
    arr.splice(index, 1);
}
arr.splice(index, 1); // remove a single element


arr.splice(3, 1, 100, 101, 102); // remove and add multiple elements

arr.splice(1); // remove all from a  specific index


// methods slice,

arr.slice(2, 5); // n-1

// concat - to combine multiple arrays to a single array
var arr1 = [1, 2, 3];
var arr2 = [3, 4, 5];
var arr3 = [5, 6];
var combinedArr = arr1.concat(arr2, arr3);

// reverse
arr.reverse();

// sort
arr.sort();

// methods - find, filter, findIndex, reduce, map, forEach, some, every

var emps = [
    {
        id: 12,
        name: 'jk',
        sal: 1000
    },
    {
        id: 1,
        name: 'krishna',
        sal: 1200
    },
    {
        id: 124,
        name: 'ramya',
        sal: 1300
    },
    {
        id: 121,
        name: 'naveen',
        sal: 1400
    }
];

var res;
for (var i = 0; i < emps.length; i++) {
    console.log(emps[i]);
    if (emps[i].id === 1) {
        res = emps[i];
        break;
    }
}


var res;
emps.forEach(function (emp, index) {
    console.log(emp, index);

    if (emp.id === 1) {
       res = emp;
    }
});


var res = emps.find(function (emp, index) {
    console.log(emp, index);
    return emp.id === 1;
});


emps.filter(function (emp) {
    console.log(emp);
    return emp.sal > 1000;
});

// should get the list of emps
emps.map(function (emp) {
    console.log(emp);
    return emp.name;
});

// use case: where want to add/update/delete another prop to each emp
emps.map(function (emp) {
    if (emp.sal > 1000) {
        emp.isActive = true;
    }
    return emp;
});


// findIndex -

var index = emps.findIndex(function (emp) {
    return emp.name === 'jk';
});

// use case: i should remove the emp
arr.splice(index, 1);
