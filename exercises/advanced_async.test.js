
// ## Implement a node.js library wrapper for:

// * Think about your SDK function signatures
// * Think about behaviours you want to expose from your SDK
// * Expose both promise based methods, and callback based methods
// * Write tests for your implementation of your SDK
// * Use async await where needed to improve your solution

// **Bonus Points:**
// * Error handling and messages to users if they do the "wrong thing"

// Your SDK should be a wrapper using the following two API's:

// [NodeJS HTTPS library](https://nodejs.org/api/https.html)
// [Example API](https://jsonplaceholder.typicode.com/)

// Your SDK _could_ look something like...

const getPosts = {
    
    getAllPostsCallback: () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }, 

    getAllPostsPromise: () => {

    }

};

describe('Your SDK', () => {
    test('works', () => {
        expect(true).toBe(true);
    })

    test('call the posts', () => {
        getPosts.getAllPostsCallback();
    })
});
