import instance from "../instance/instance";
import protectedInstance from "../instance/protectedInstance";

const authServices = {
    register: async (userData) => {
        try {
            const response = await instance.post("/auth/register", userData,{
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
            return response.data;
        } catch (error) {
            return { message: error.message, status: error.response?.status }
        }
    },

    login: async (credentials) => {
        try {
            const response = await protectedInstance.post("/auth/login", credentials);
            return response.data;
        } catch (error) {
            return { message: error.message, status: error.response?.status }
        }
    },  

    me: async () => {
        try {
            const response = await protectedInstance.get("/auth/me");
            console.log(response);
            return response.data;
        } catch (error) {
            console.log("hi;",error)
            return {
                
                message: error.message, status: error.response?.status
            }
        }
    },

    logout: async () => {
        try {
            const response = await protectedInstance.post("/auth/logout");
            return response;
        } catch (error) {
            return { message: error.message, status: error.response?.status }
        }
    }
}

export default authServices;