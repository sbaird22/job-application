import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:5000/api", // Default to localhost if not set
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // Include credentials if needed for cookies or tokens
});
export default api;