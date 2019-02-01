const axios = require('axios');
const config = require('../config');
const comments = require('./commentsHelper');

function getUserByUserName(username) {
  return new Error('not implemented');
}

function getUserByUserEmail(email) {}

function getUserByUserId(id = 1) {
  return axios
    .get(`${config.baseurl}users?id=${id}`)
    .then(response => {
      return response.data[0];
    })
    .catch(error => console.log(error));
}

function getAllUsers() {
  return axios
    .get(`${config.baseurl}users`)
    .then(response => response)
    .catch(error => console.log(error));
}

(async function getAllCommentsUserHasMade(id = 1) {
  const user = await getUserByUserId(1);
  console.log(user);
  const commentsArray = await comments.getAllComments();

  //   console.log(commentsArray.data);
  const filteredComments = commentsArray.data.filter(
    c => c.email === user.email
  );

  console.log(filteredComments);
  return filteredComments;
})();

// module.exports = {
//   getUserByUserName,
//   getUserByUserEmail,
//   getUserByUserId,
//   getAllUsers,
//   getAllCommentsUserHasMade,
// };
