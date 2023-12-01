import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import AddToCart from "../pages/addToCart/AddToCart";
import Top from "../pages/topReview/Top";
import Dashboard from "../layout/dashboard/Dashboard";
import DHome from "../pages/Dashboard/DHome";
import AllPList from "../pages/Dashboard/allPList";
import AddToP from "../pages/Dashboard/AddToP";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: "/readHistory",
                element:<AddToCart/>
            }
            , {
                path: '/top-rated',
                element: <Top />    
            },

    ]

    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/',
                element:<DHome/>,
            },
            {
                path: '/dashboard/list',
                element:<AllPList/>
            },
            {
                path: '/dashboard/saveProduct',
                element:<AddToP/>
            }
        ]
}
])