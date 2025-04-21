import React, { Component } from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Roots from '../Pages/Roots/Roots';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Blogs from '../Pages/Blogs/Blogs';

  export const router = createBrowserRouter([
    {
        path: "/",
        Component: Roots,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                path: "/",
                Component:Home
            },
            {
                path: "/my-bookings",
               
            },
            {
                path: "/blogs",
                loader:()=> fetch("blogs.json"),
                Component: Blogs,
            }
        ]
    }
  ])