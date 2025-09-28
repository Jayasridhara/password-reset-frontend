import authServices from "../../services/authServices";


const authLoader = async () => {
    try {
        const response = await authServices.me();
        if (!response.user) {
            console.log('No user found, redirecting to login');
            return redirect("/login");
        }
        return response;
    } catch (error) {
        console.log('Error in authLoader:', error);
        return redirect("/login");
    }
};

export default authLoader;