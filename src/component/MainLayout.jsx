import { Link, Outlet } from "react-router";


const MainLayout = () => {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Password Reset App</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/forgot-password">Forgot Password</Link>
                            </li>
                            {/* Add other navigation links here as needed */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-5">
                <Outlet /> {/* This is where the child routes will be rendered */}
            </div>
        </div>
    );
};

export default MainLayout;