import { Link, useLoaderData } from "react-router";



const Dashboard = () => {

    const { data } = useLoaderData();
    console.log(data);
    const user = data?.user;

    if (!user) {
        return <div>Error: Unable to load user data. Please <Link to="/login">log in</Link> again.</div>;
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <p
                className="mt-2 text-lg font-small text-gray-700 text-center max-w-md px-4"
            >
                Welcome, <span className="font-bold">{user.name}</span>!
                &nbsp;
                <Link
                    to="/logout"
                    className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >Logout</Link>
            </p>
        </div>
    )
}

export default Dashboard;