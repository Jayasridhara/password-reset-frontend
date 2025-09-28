
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./component/MainLayout";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./pages/Dashboard";
import Logout from "./component/Logout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import authLoader from "./loaders/unit/authLoader";


const routes = [
  {
    path: "/",
    element: <MainLayout />,
   children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "reset-password/:token", // ✅ correct reset route
        element: <ResetPassword />
      }
    ]
  },
   {
    path: "dashboard",
    element: <Dashboard />,
    loader: authLoader,
    hydrateFallbackElement: <div>Loading...</div>
  },
  {
    path: "logout",
    element: < Logout/>
  }
]

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
})

const App = () => {
  return (
    <>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
      <ToastContainer />
    </>
  )
}

export default App;