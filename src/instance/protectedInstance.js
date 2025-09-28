import axios from "axios";


const baseURL = "https://password-reset-be-1-0agf.onrender.com/api";
console.log(baseURL);
const protectedInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
}); 

export default protectedInstance;