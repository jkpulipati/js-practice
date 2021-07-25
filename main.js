// console.log('Greet');
// import System from './system';
// System();

var arr = [['a','b'],['c','d'],['e','f'],['g','h']];

function getJSON(arr) {
    return arr.reduce((acc, res) => {
        let obj = Object.fromEntries([res]);
        acc = {...acc, ...Object.fromEntries([res])};
        return acc;
    }, {});
}

console.log(getJSON(arr));

