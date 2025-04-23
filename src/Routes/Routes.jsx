import React, { Component } from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Roots from '../Pages/Roots/Roots';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Blogs from '../Pages/Blogs/Blogs';
import Contact from '../Pages/Contact/Contact';
import LawyerDetails from '../Pages/LawyerDetails/LawyerDetails';

  export const router = createBrowserRouter([
    {
        path: "/",
        Component: Roots,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                path: "/",
                loader: () => new Promise(resolve => setTimeout(resolve, 150)),
                Component:Home,
                loader:()=> fetch("/data.json"),
            },
            {
                path: "/my-bookings",
                
            },
            {
                path: "/lawyerDetails/:id",
                loader: () => fetch("/data.json"),
                Component:LawyerDetails,
            },
            {
                path: "/blogs",
                loader:()=> fetch("/blogs.json"),
                Component: Blogs,
            },
            {
                path: "/contact-us",
                loader: () => new Promise(resolve => setTimeout(resolve, 150)),
                element:<Contact></Contact>,
            },
        ]
    }
  ])