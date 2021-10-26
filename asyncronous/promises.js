// to maintain cleaner code and to eliminate the call backs

/**
 * Promise returns a single value (- either a success or failure one) in future
 * Promsie cannot be canceleable
 */

 const posts = [
    {
        title: 'Book one',
        author: 'JK',
        year: 2020
    },
    {
        title: 'Book two',
        author: 'JK',
        year: 2021
    }
]

function getPosts() {
    setTimeout(() => {
        const postList = posts.map(post => `<li>${post.title}</li>`)
        document.body.innerHTML = postList;
    },1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        posts.push(post);
        resolve();
    });
}

createPost({
    title: 'Book three',
    author: 'JK',
    year: 2021
}).then(getPosts);
