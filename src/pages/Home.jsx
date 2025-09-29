  import React from 'react';
  import { Link } from 'react-router';

  const Home = () => {
    return (
         <div className="flex flex-col items-center justify-center min-h-50  ">
           
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                    Password Management Made Easy
                </h1>
            <p className="text-lg text-gray-700 mb-8">
                Log in to your existing account or create a new one to securely manage your access.
            </p>
            <div className="flex space-x-4">
                <Link to="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Register
                </Link>
                <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </Link>
            </div>
        </div>
    );
  };
    
  export default Home;