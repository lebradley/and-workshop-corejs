const axios = require('axios');
const config = require('../config');

function getAllComments() {
  return axios
    .get(`${config.baseurl}comments`)
    .then(response => {
      return response;
    })
    .catch(error => console.log(error));
}

module.exports = {
  getAllComments
};
