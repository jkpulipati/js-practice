// spread

var arr = [1, 2, 3, 4, 5];

var arr2 = [4, 5, 6, 7];

var res = arr.concat(arr2);

let res = [...arr, ...arr2];


// see for objects

let emp = {
    id: 1217,
    name: 'jk',
    sal: 1234
};

let emp1 = {...emp};

