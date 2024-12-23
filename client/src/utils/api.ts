// utils/api.ts
import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api',// Ensure this matches your backend server
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default api;