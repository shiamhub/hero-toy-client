import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToys from "../pages/AllToys/AllToys";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../shared/ViewDetails";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import UpdateMyToy from "../pages/MyToys/UpdateMyToy";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://assignment-11-server-alpha-seven.vercel.app/allToys')
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'viewDetails/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-alpha-seven.vercel.app/allToys/${params.id}`)
            },
            {
                path: 'addToy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'updateMyToy/:id',
                element: <PrivateRoute><UpdateMyToy></UpdateMyToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-alpha-seven.vercel.app/allToys/${params.id}`)
            }
        ]
    }
])

export default Routes;