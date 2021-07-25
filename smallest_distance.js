const blocks = [
    {
        school: false,
        gym: true,
        store: false,
    },
    {
        school: true,
        gym: false,
        store: false,
    },
    {
        school: true,
        gym: true,
        store: false,
    },
    {
        school: false,
        gym: true,
        store: false,
    },
    {
        school: false,
        gym: true,
        store: true,
    }
];

function isAllPropsTruthy(block) {
    const blockValues = Object.values(block);
    return blockValues.length === blockValues.filter(value => value).length;
}

blocks.slice(1).reduce( (acc, res) => {

    const blockValues = Object.values(acc);
    const isAllNearer = blockValues.length === blockValues.filter(value => value).length;
    if (isAllNearer) {

    }

    return
}, blocks[0]);
console.log('Nearest Block is ', getNearstBlock(blocks));

