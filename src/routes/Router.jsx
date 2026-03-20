import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Login from '../auth/Login';
import App from "../App";
import AdminLayout from '../components/AdminLayout';
import Dashboard from '../modules/Dashboard';
import ProductManagement from '../components/ProductManagement';
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
            path : "/landingpage/productmanagement",
            element : <ProductManagement/>
            }
            
        ]
        
    },
  
    
]);

export default routes;