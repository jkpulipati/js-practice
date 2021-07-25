// object is a set of key value pairs

/**
 * to create an object -

object literal
using new keyword - func's
Object.assign
Object.create

*/

// var obj = {
//     key: value,
//     key: value,
//     key: value,
// };

// JSON - js object notation

var employee = {
    firstName: 'test',
    lastName: 'test',
    age: 12,
    sal: 233344,
    isActive: true,
    address: {
        hNo: 123,
        pincode: 123123,
        city: 'hyd'
    },
    exp: {
        firstComp: {
            name: 'Test Comp',
            duration: 24,
            address: {
                hNo: 123,
                pincode: 123123,
                city: 'hyd'
            }
        },
        secondComp: {
            name: 'Test Comp',
            duration: 24,
            address: {
                hNo: 123,
                pincode: 123123,
                city: 'hyd'
            }
        }
    }
};


var emp = {
    firstName: 'test',
    lastName: 'Test',
    age: 12
};
typeof emp;

// curd

// Adding properties - ., []

emp.salary = 12344;
emp.city = 'Hyd';

emp['fatherName'] = 'Test';

console.log(emp);

var number = 123;

emp[number] = 'Number'; // 123 prop will be added with value Number

// Read props - ., []

emp.salary; // 12344
emp['firstName'] // test

emp.sal; // undefined

// emp.123; // ref error

emp[123]; // Number

// update the data - ., []
emp.salary = 452;

// delete
delete emp.age;

var obj1 = {name: 'test'};

employee[obj1] = 'test';

var obj = {name: 'test'};
employee[obj] = 'new value';

employee[obj1]; // new value


var obj = {
    name: 'test',
    address: {
        city: 'hyd'
    }
};

console.log(obj.address.city);

// update
obj.address.city = 'JK';

console.log(obj.address.city);


// using new Object
var obj = new Object();

// using object create

var employee = Object.create(emp);

employee.hasOwnProperty('age'); // false



Object.keys(emp);
Object.values(emp);

for (var key in emp) {
    console.log(key);
}

for (var key in emp) {
    console.log(key, emp[key]);
}


var obj = {
    id: 123,
    name: 'jk',
    numbers: [1, 2, 3, 4],
    emp: {
        id: 1217,
        name: 'krishna'
    },
    foo: function () {
        console.log('from foo', this);

        function bar() {
            console.log('from bar', this);
        }

        bar();
    }
};

var obj = {
    id: 123,
    name: 'jk',
    numbers: [1, 2, 3, 4],
    emp: {
        id: 1217,
        name: 'krishna'
    },
    foo: function () {
        console.log(this.name);
        var _this = this;
        function bar() {
            console.log('from bar', _this);
        }
        return bar;
    }
};

obj.numbers; // [1, 2, 3, 4]

obj.foo(); // this is going to be replaced with obj

var fooFunc = obj.foo;
fooFunc();
