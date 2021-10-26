// Object.create

const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.author} is ${years} years old`;
    }
}

// Create Object
const book1 = Object.create(bookProtos);
book1.title = 'Book one';
book1.author = 'JK';
book1.year = '2020';

// other way

const book2 = Object.create(bookProtos, {
    title: { value : 'Book two'},
    author: { value : 'JK'},
    year: { value : 2021}
});

