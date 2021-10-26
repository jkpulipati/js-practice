// Classes are just syntactic sugar
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // methods
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.author} is ${years} years old`;
    }

    static getStore() {
        return 'JK book store';
    }
}

const book1 = new Book('Book one', 'JK', 2020);
console.log(book1.getSummary());
