// utils/api.ts
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001', // Ensure this matches your backend server
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default api;