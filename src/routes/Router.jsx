import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Login from '../auth/Login';
import App from "../App";
import AdminLayout from '../components/AdminLayout';
import Dashboard from '../modules/Dashboard';
import MerchentManagement from '../components/MerchentManagement';
let routes = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/landingpage",
        element:<AdminLayout/>,
        children:[
            {
                index:true,
                element:<Dashboard/>
            },
            {
        path:'/landingpage/merchentmanagement',
        element:<MerchentManagement/>
    }   
        ]
    },
    
    
    
]);

export default routes;