import axios from "axios";

// Create an Axios instance
const api = axios.create({
    baseURL: "http://localhost:3001/api", // Default to localhost if not set
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // Include credentials if needed for cookies or tokens
});
export default api;
