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
}


class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);

        this.month = month;
    }
}


const mag1 = new Magazine('Book one', 'JK', 2020, 'JAN');
console.log(mag1.getSummary());