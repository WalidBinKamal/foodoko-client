import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import AddFoods from "../pages/AddFoods/AddFoods";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import ViewFoods from "../pages/ViewFoods/ViewFoods";
import Cart from "../pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route not Found</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/foods'),
            },
            {
                path: '/viewFoods',
                element: <PrivateRoute><ViewFoods></ViewFoods></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/foods'),
            },
            {
                path: '/addFood',
                element: <PrivateRoute><AddFoods></AddFoods></PrivateRoute>,
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/forgotPassword',
                element: <ForgetPassword></ForgetPassword>,
            },
            {
                path: '/registration',
                element: <Registration></Registration>,
            },
        ]
    },
]);
export default router;