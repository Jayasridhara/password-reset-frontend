import axios from "axios";


const baseURL = "https://password-reset-be-1-0agf.onrender.com/api";

const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: { "Content-Type": "application/json" },
});

export default instance;