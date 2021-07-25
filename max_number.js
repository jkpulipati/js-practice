function maxNumber(arr) {
    return arr.reduce( (current, next) => {
        return next > current ? next : current;
    }, 0);
}

const arr = [14, 6, 1, 8, 10];
console.log(maxNumber(arr));

// using predefined function
const maxValue = Math.max(...arr);
console.log(maxValue);
