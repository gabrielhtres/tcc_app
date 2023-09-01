import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3030',
  timeout: 5000,
  // contentType: 'application/json',
});

export default api;
