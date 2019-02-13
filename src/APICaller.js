import fetch from 'cross-fetch';

const queryString = require('query-string');
const { Promise } = require('es6-promise');

const headerData = {
  "content-type": 'application/x-www-form-urlencoded'
}

const API_URL = 'https://api.github.com/users';

export default (endpoint, method = 'get', body, header = headerData) => fetch(`${API_URL}${endpoint}`, {
  headers: header,
  method,
  body: queryString.stringify(body),
})
.then(response => {
  response.json().then(json => ({ json, response }))
})
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  })
  .then(
    response => response,
    error => error
  );
  