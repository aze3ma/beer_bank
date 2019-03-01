import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.PUBLIC_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
