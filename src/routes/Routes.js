import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "../context/privateRouter/PrivateRouter";
import Main from "../layout/Main";
import Blog from "../pages/blog/Blog";
import Chart from "../pages/chart/Chart";
import Dashbord from "../pages/dashbord/Dashbord";
import FofPage from "../pages/FofPage/FofPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyOrder from "../pages/myorder/MyOrder";
import Products from "../pages/products/Products";
import Signup from "../pages/signup/Signup";
import User from "../pages/user/User";

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
                path:'/blog',
                element:<Blog></Blog>
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
                element: <PrivateRouter><Dashbord></Dashbord></PrivateRouter>,
                children: [
                    {
                        path: '/dashbord',
                        element: <MyOrder></MyOrder>
                    },
                    {
                        path: '/dashbord/chart',
                        element: <Chart></Chart>
                    },
                    {
                        path: '/dashbord/user',
                        element: <User></User>
                    },
                    {
                        path: '/dashbord/user',
                        element: <User></User>
                    },
    
                ]
        }
        ]
    },
    {
        path: '/*',
        element: <FofPage></FofPage>
    }
   
])
export default router;