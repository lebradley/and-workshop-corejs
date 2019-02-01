const axios = require('axios');
const config = require('../config');

function getUserByUserName(username) {
  return new Error('not implemented');
}

function getUserByUserEmail(email) {}

function getUserByUserId(id = 1) {
  return axios
    .get(`${config.baseurl}users?id=${id}`)
    .then(response => {
      return response[0];
    })
    .catch(error => console.log(error));
}

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
