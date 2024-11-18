import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Layouts/Home';
import Learning from '../Layouts/Learning';
import Tutorial from '../Layouts/Tutorial';
import About from '../Layouts/About';

const Route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/learning",
            element: <Learning></Learning>
        },
        {
            path: "/tutorial",
            element: <Tutorial></Tutorial>
        },
        {
            path: "/about",
            element: <About></About>
        }
      ]
    },
  ]);

export default Route;