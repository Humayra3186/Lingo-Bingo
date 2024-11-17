import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';

const Route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    },
  ]);

export default Route;