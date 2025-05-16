import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9060/api',
});

export default axiosInstance;