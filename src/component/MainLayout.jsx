import { Link, Outlet } from "react-router";


const MainLayout = () => {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Password Reset App</Link>
                </div>
            </nav>
            <div className="container mt-5">
                <Outlet /> {/* This is where the child routes will be rendered */}
            </div>
        </div>
    );
};

export default MainLayout;