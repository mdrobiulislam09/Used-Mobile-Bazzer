import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "../context/privateRouter/PrivateRouter";
import Main from "../layout/Main";
import Dashbord from "../pages/dashbord/Dashbord";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Products from "../pages/products/Products";
import Signup from "../pages/signup/Signup";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
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
                element: <Signup></Signup>
            },
            {
                path: '/product/:category_id',
                element: <PrivateRouter><Products></Products></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.category_id}`)
            },
            {
                path: '/dashbord',
                element: <PrivateRouter><Dashbord></Dashbord></PrivateRouter>
            }
        ]
    }
])
export default router;