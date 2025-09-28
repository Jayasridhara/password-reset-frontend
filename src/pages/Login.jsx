
import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import authServices from "../services/authServices";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        authServices.login({ email, password })
            .then(response => {
                toast.success(response.message || "Login successful!", {
                    position: "bottom-right"
                });
                navigate("/dashboard");
            })
            .catch(err => {
                toast.error(err.message || "Login failed!", {
                    position: "bottom-right"
                });
            })
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">
                Login
            </h1>
            <form className="mt-2 w-full max-w-md p-4 bg-white rounded shadow" onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;