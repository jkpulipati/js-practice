/* html5 browser API's
localStorage
sessionStorage
*/


// localStorage - it's just like a normal js object

// To store a value we have to make use of setItem method

typeof localStorage; // object

localStorage.setItem('userId', 1217); // add
localStorage.setItem('userId', 12171); // update

localStorage.getItem('userId'); // get

// delete
localStorage.removeItem('userId');

// to store non - primitive values
const emp = {
    name: 'jk',
    id: 1217
};
localStorage.setItem('emp', JSON.stringify(emp));

const value = JSON.parse(localStorage.getItem('emp'));

// sessionStorage same as like local storage but the scope is restricted to a tab.

