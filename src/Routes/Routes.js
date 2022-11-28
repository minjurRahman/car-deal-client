import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Cars from "../Pages/Cars/Cars";
import AddACars from "../Pages/Dashboard/AddACars/AddACars";
import Allsellers from "../Pages/Dashboard/AllSellers/Allsellers";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Payment from "../Pages/Dashboard/Payment/Payment";
import SellersCars from "../Pages/Dashboard/SellerCars/SellersCars";
import UsersOrders from "../Pages/Dashboard/UsersOrders/UsersOrders";
import Advertise from "../Pages/Home/Advertise/Advertise";
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
                loader: ({params}) => fetch(`https://products-resale-server-dusky.vercel.app/category/${params.categoryId}`)
            },
            {
                path: '/advertise/:id',
                element: <Advertise></Advertise>
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
            },
            {
                path: '/dashboard/addcars',
                element: <AdminRoute><AddACars></AddACars></AdminRoute>
            },
            {
                path: '/dashboard/sellers',
                element: <AdminRoute><Allsellers></Allsellers></AdminRoute>
            },
            {
                path: '/dashboard/mycars',
                element: <AdminRoute><SellersCars></SellersCars></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({params}) => fetch(`https://products-resale-server-dusky.vercel.app/bookings/${params.id}`)
            },
        ]
    }
])


