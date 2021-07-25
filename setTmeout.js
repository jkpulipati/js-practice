
// js dynamic typed scripting language, asyncronous langugage, single threaded


console.log('hi ');

// service call - triger - 60 seconds - promises

console.log('hello ');

setTimeout(function () {
    console.log('from settimeout');
}, 4000);

setTimeout(function () {
    console.log('from settimeout');
}, 1000);

setTimeout(function () {
    console.log('from settimeout');
}, 2000);

console.log('from end of the file ');



console.log('from first line'); // 1

setTimeout(function () {
    console.log('from first settimeout'); // 5
}, 2000);

console.log('from second line'); // 2

setTimeout(function () {
    console.log('from first settimeout');  //4
}, 100);

console.log('from last line');  // 3


console.log('from first line');

function sum(a, b) {
    console.log(a + b);
}
sum(3, 4);
setTimeout(function () {
    console.log('from first settimeout');  //4
}, 200);
sum(3, 4);
sum(3, 4);
sum(3, 4);
setTimeout(function () {
    console.log('from first settimeout');  //4
}, 100);
sum(3, 4);

