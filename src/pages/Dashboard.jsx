import { useEffect } from "react";
import { Link, useLoaderData } from "react-router";



const Dashboard = () => {
   
   const data = useLoaderData();
  console.log("useLoaderData result:", data); // Debug: Log the loader data

  // Handle cases where data is undefined or user is null
  if (!data || !data.user) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p className="mt-2 text-lg font-small text-gray-700 text-center max-w-md px-4">
          Unable to load user data. Please try logging in again.
          &nbsp;
          <Link
            to="/login"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </Link>
        </p>
      </div>
    );
  }

  const { user } = data;
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mt-2 text-lg font-small text-gray-700 text-center max-w-md px-4">
        Welcome, <span className="font-bold">{user.name}</span>!
        &nbsp;
        <Link
          to="/logout"
          className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </Link>
      </p>
    </div>
  );
}

export default Dashboard;