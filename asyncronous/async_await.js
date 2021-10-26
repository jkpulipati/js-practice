// Async / awiat

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


async function init() {
    await createPost({
        title: 'Book three',
        author: 'JK',
        year: 2021
    });
    getPosts();
}

init();
