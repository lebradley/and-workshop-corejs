const axios = require('axios');

function getUserByUserName(username) {
  return new Error('not implemented');
}

function getUserByUserEmail(email) {}

function getUserByUserId(id) {}

function getAllUsers() {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => response)
    .catch(error => console.log(error));
}

module.exports = {
  getUserByUserName,
  getUserByUserEmail,
  getUserByUserId,
  getAllUsers
};
