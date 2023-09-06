import axios from 'axios';
import { getStorageData } from '../utils/storageService';
// import Config from 'react-native-config';

const getToken = async () => {
  const token = await getStorageData('jwtToken');
  return token;
};

const api = axios.create({
  baseURL: 'http://192.168.0.100:3030',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + getToken(),
  },
});

api.interceptors.request.use(
  async config => {
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

export default api;
