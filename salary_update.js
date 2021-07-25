let arr = [
    {
      name: 'John',
      id: 'EMP00010',
      salary: '35000',
      age: 12
    },
    {
      name: 'Tom',
      id: 'EMP00011',
      salary: '36000',
      age: 122
    },
    {
      name: 'James',
      id: 'EMP00012',
      salary: '37000',
      age: 32
    }
];

let jsonObject = {'John': 50000, 'Tom':'51000', 'James': '52000'};

arr.map(emp => {
    const latestSalary = jsonObject[emp[name]];
    return {
        ...emp, salary: latestSalary
    }
});

arr.sort( (emp1, emp2) => {
    return emp1.age > emp2.age ? 1 : -1;
});

var str = '{[()]}';

var obj = {
    '{': '}',
    '[': ']',
    '(': ')'
};

function testBrancketsOpenClose(str) {
    let res = [];
    let bracket;
    for (let i = 0; i < str.length; i++) {
        bracket = obj[str[i]];
        if (bracket === '(' || bracket === '[' || bracket === "{") {
          res.push(bracket);
        } else if (bracket === ')' || bracket === ']' || bracket === "}") {
          const closeBracket = stack.pop();
          if (obj[closeBracket] !== bracket) {
            return false;
          }
        }
    }

    return res.length === 0;
}
