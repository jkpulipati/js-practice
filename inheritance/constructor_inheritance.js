// Inheritance

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
}

// Magazine constructor

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// Instantiate magazine

const mag1 = new Magazine('Book one', 'JK', 2020, 'JAN');
mag1.getSummary(); // give type error getSummary is not a function

// Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

// now crate magazine object
const mag1 = new Magazine('Book one', 'JK', 2020, 'JAN');
mag1.getSummary(); // it will pass now

