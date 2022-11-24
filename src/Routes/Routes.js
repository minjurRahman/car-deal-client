import { createBrowserRouter } from "react-router-dom";
import Laxuarious from "../AllCategories/Laxuarious/Laxuarious";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginRegistration/Login";
import SignUp from "../Pages/LoginRegistration/SignUp";
import ErrorPage from "../Pages/Shared/ErrorPage";



export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                path: '/luxury',
                element: <Laxuarious></Laxuarious>
            }
        ]
    },
])
