// constructor

// function Book() {
//     console.log('Book instantiated');
// }

// const book1 = new Book();
// const book2 = new Book();

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

// Instantiate book object
const book1 = new Book('Book one', 'JK', 2020);
const book2 = new Book('Book two', 'JK', 2021);

console.log(book1.getSummary());
console.log(book1);

/**
 * Here, if we look at the each object structure - contains getSummary method
 * which is not good, so make use of prototypes
 */


 function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
}

// getAge
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.author} is ${years} years old`;
}

// Instantiate book object
const book1 = new Book('Book one', 'JK', 2020);
const book2 = new Book('Book two', 'JK', 2021);

console.log(book1.getSummary());
console.log(book1);
