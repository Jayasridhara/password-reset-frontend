# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


  import React from 'react';
  import { Link } from 'react-router';

  const Home = () => {
    return (
         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Link to="/">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                    Password Management Made Easy
                </h1>
            </Link>
            <p className="text-lg text-gray-700 mb-8">
                Log in to your existing account or create a new one to securely manage your access.
            </p>
            <div className="flex space-x-4">
                <Link to="/register" className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded">
                    Register
                </Link>
                <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded">
                    Login
                </Link>
            </div>
        </div>
    );
  };
    
  export default Home;
