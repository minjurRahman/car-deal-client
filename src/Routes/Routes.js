import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Cars from "../Pages/Cars/Cars";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UsersOrders from "../Pages/Dashboard/UsersOrders/UsersOrders";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginRegistration/Login";
import SignUp from "../Pages/LoginRegistration/SignUp";
import ErrorPage from "../Pages/Shared/ErrorPage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";



export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/cars/:categoryId',
                element: <PrivateRoute><Cars></Cars></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.categoryId}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <UsersOrders></UsersOrders>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
])


