import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:8081'
    baseURL: 'https://tormenta-pwa.herokuapp.com/',
});

export default axiosInstance;
