import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Login from '../auth/Login';
import App from "../App";
import AdminLayout from '../components/AdminLayout';
import Dashboard from '../modules/Dashboard';
import MerchentManagement from '../components/MerchentManagement';
import ProductManagement from '../components/ProductManagement';
import UserManagement from '../components/UserManagement';
import AdminProfile from '../components/AdminProfile';
let routes = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/landingpage",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: '/landingpage/merchentmanagement',
                element: <MerchentManagement />
            },
            {
                path: "/landingpage/productmanagement",
                element: <ProductManagement />
            },
            {
                path: "/landingpage/usermanagement",
                element: <UserManagement/>
            },
            {
                path: "/landingpage/AdminProfile",
                element: <AdminProfile/>
            }

        ]

    },




]);

export default routes;