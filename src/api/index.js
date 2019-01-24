import axios from 'axios';

export default () => axios.create({
  baseURL: 'http://my-json-server.typicode.com/fly365com/code-challenge',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'X-Requested-With',
    'Access-Control-Allow-Methods': 'GET'
  }
});
