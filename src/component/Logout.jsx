
import { useNavigate } from "react-router";
import { useEffect } from "react";
import authServices from "../services/authServices";
import { toast } from "react-toastify";

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        authServices.logout()
            .then(() => {
                setTimeout(() => {
                    toast.success(response.message||"Logged out successfully!", {
                        position: "bottom-right"
                    });
                    navigate("/login");
                }, 500);
            })
            .catch(err => {
                toast.error(err.message || "Logout failed!", {
                    position: "bottom-right"
                });
                navigate("/dashboard");
            })
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="mt-2 text-lg font-small text-gray-700 text-center max-w-md px-4">
                Logging out...
            </p>
        </div>
    )
}

export default Logout;