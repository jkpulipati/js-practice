function sortNumbers() {
    return arr.reduce((acc, value) => {
        const nextIndex = acc.findIndex(num => value > num);
        const index = nextIndex > -1 ? nextIndex : acc.length;
        acc.splice(index, 0, value);
        return acc;
    }, []);
}

const arr = [3, 1, 8, 2, 1];

const res = sortNumbers(arr);
console.log(res);
