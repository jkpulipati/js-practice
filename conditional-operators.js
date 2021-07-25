// if else if else else if
var expression = '';
if (expression) {
    // if expression is truthy it will come here
} else {
    // if expression is falsy it will come here
}

// w.r.t js

// falsy values - 0, false, null, undefined, ''
                                                                                                                                                
var isActive = undefined;

if (isActive) {
    console.log('from if');
} else {
    console.log('from else');
}

// if a sales person per day sales is greater than 5 then give him a bonus of 500

var salesPerDay = 6;
var salary = 4000;

if (salesPerDay > 5) {
    salary = salary + 500;
}

console.log('Final Salary', salary);

/**
 * if student percentage is greater than 80% should print execellent
 *                          < 80 and > 70 should print good
 *                          < 70 and > 60  should print average
 *                          < 60 should print try next time
 * 
 *  
*/ 
var percentage = 85;
if (percentage > 80) {
    console.log('Excellent');
} else if (percentage < 80) {
    if (percentage > 70) {
        console.log('good');
    }
}

// operators - &&, ||, !, <, >, <=, >=

12 && 21 // 21

0 && 21 // 0

false && 12 // false

'jk' && 'test' // 'test'

'jk' && 0 // 0

'jk' || false // 'jk

0 || 23 // 23

null || 0 // 

null || 'test' //

12 || 67 //

'test' || 'test1' //

!true

!false

!null //

!undefined //

!12 //

!'test' //

12 > 4 > 2
2 > 6 < 7
2 > 6 < 7 > 5

'test' + 2 //"test2"
2 + 'g' // "2g"
'test' + 'test' //"testtest"
2 + 3 //5
2 + '3' //"23"
'2' + 3 //"23"
+'2' + 3

12 * 1 //12
12 * 't' //NaN
12 - 't' //NaN
12 / 't' //NaN
12 % 't'
