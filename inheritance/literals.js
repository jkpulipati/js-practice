const book1 = {
    title: 'Book one',
    author: 'JK',
    year: 2020,
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

// now what if i want to create one more book

const book2 = {
    title: 'Book two',
    author: 'JK',
    year: 2021,
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}
/**
 *
 now what if i want to create more than one book
 If we look at the above two objects, duplicate code getsummary in each object
 So, we can make use of Constructors
 */