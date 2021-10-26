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

getPosts();

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({
    title: 'Book three',
    author: 'JK',
    year: 2021
}, getPosts);