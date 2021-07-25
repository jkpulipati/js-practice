// arrays
var emps = [
    {
        id: 1,
        name: 'jk',
        active: true,
        workingFor: 'ABN',
        sal: 4000
    },
    {
        id: 2,
        name: 'jk1',
        active: true,
        workingFor: 'ABN',
        sal: 5000
    },
    {
        id: 3,
        name: 'jk3',
        active: true,
        workingFor: 'HSBC',
        sal: 6000
    }
];

// array methods - find, filter, map, reduce, forEach, for
var abnEmps = [];
emps.forEach(emp => {
    if (emp.workingFor === 'ABN') {
        abnEmps.push(emp);
    }
});

const abnEmployees = emps.filter(emp => {
    // asdkj
    //asdfk
    return emp.workingFor === 'ABN';
});

const emp = emps.find(emp => {
    return emp.id === 1;
});

// mutable
for(var i = 0; i < emps.length; i++) {
    emps[i].sal = emps[i].sal + 5000;
}

// Immutable
const updatdSalEmps = emps.map(emp => {
    emp.sal += 5000;
    return emp;
});
// use case i want the list of emps names

const empNamesList = emps.map(emp => {
    return emp.id;
});

// monthly



console.log(emps);

// count of sals
let totalSalary = 0;
for(var i = 0; i < emps.length; i++) {
    totalSalary = totalSalary + emps[i].sal;
}
let totalSalary = 0;
emps.forEach(emp => {
    totalSalary += emp.sal;
});

const result = emps.reduce((acc, res) => {
    console.log(acc, res);   // 1 - 0, emp1   2 - 2000 emp2    3 - 4000 emp3
    acc = acc + res.sal;
    return acc;
}, 0);

console.log('final salary', totalSalary);

console.log('abn emps', abnEmps);

// functions - common re usable code

function sum(num1, num2) {  // declaration
    var res = num1 + num2;

    console.log(res);
}
sum(1, 2); // execute
sum(2, 2); // execute
sum(4, 2); // execute


function findEmpById(empId) {

    // logic is all about finding an emp whose id is empId
    return emps.find(emp => emp.id === empId);
}

const emp = findEmpById(12);
findEmpById(1);
findEmpById(14);


function test () {
    console.log('start: from test function');

    return 12;

    console.log('end: from test function');
}
// logic


test();


// programs to work

var nums = [1, 2, 4, 5, 2];

// write a function, replace value actualValue, replaceValue
// ex: 5, 500, 4, 400  2, 200

// write a function add a value at myown index, should return the resultant arr.
// ex: index, value   2   300,   1  1   30 300

// dates sorting

// write a function , get the count of active emps
// write a function, get the heighest salary of emp info, lowest salary of emp info.
