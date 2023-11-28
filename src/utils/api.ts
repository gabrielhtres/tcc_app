import axios from 'axios';
import { getStorageData } from '../utils/storageService';

const getToken = async () => {
  const token = await getStorageData('jwtToken');
  return token;
};

const api = axios.create({
  baseURL: 'http://192.168.0.102:3030',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + getToken(),
  },
});

api.interceptors.request.use(
  async config => {
    // console.log(process.env.API_SERVER_URL);
    const token = await getToken();

    config.headers['Content-Type'] = 'application/json';

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// api.interceptors.response.use(
//   async response => {
//     return response;
//   },
//   async error => {
//     // const refreshToken = await getStorageData('refreshToken');

//     // if (error.response.status && error.response.status === 401) {
//     //   const res = await api.post('/refresh', undefined, {
//     //     headers: {
//     //       Authorization: `Bearer ${refreshToken}`,
//     //     },
//     //   });

//     return Promise.resolve(error);
//     // }
//   },
// );

export default api;
