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
    'Authorization': 'Bearer ' + getToken(),
  },
  
  // contentType: 'application/json',
});

export default api;
