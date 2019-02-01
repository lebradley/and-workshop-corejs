// This is the MAIN file, which imports the other sections of the code

const users = require('./helpers/userHelper');
const posts = require('./helpers/postHelper');
const comments = require('./helpers/commentsHelper');
const albums = require('./helpers/albumsHelper');
const photos = require('./helpers/photosHelper');
const todos = require('./helpers/todosHelper');


// do some putting it all together

// export the SDK

module.exports = {
    users,
    posts,
    comments,
    albums,
    photos,
    todos
}