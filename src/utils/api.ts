import axios from 'axios';
import { getStorageData } from '../utils/storageService';

const getToken = async () => {
  const token = await getStorageData('jwtToken');
  return token;
};

const api = axios.create({
  baseURL: 'http://192.168.0.105:3030',
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

api.interceptors.response.use(
  async response => {
    if (response.status === 401) {
      const refreshToken = await getStorageData('jwtRefreshToken');

      if (!refreshToken) {
        return response;
      }

      api.post('/refresh', undefined, { headers: { Authorization: `Bearer ${refreshToken}`} }).then(res => {
        return res;
      }).catch(() => {
        return response;
      });
    }

    return response;
  }
)

export default api;
