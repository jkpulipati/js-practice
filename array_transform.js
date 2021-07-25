const arr = [10, 14, 200, 13, 0, 44, 5];

const res = arr.reduce((acc, value) => {
    const zeroValueIndex = acc.findIndex(num => num === 0);
    const currentIndex = zeroValueIndex > -1 ? zeroValueIndex : acc.length;
    acc.splice(currentIndex, 0, value);
    return acc;
}, []);


console.log(res);
