import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Layouts/Home';
import Learning from '../Layouts/Learning';
import Tutorial from '../Layouts/Tutorial';
import About from '../Layouts/About';
import Vocabulary from '../Layouts/Vocabulary';
import Login from '../Layouts/Login';
import Register from '../Layouts/Register';
import Reset from '../Layouts/Reset';
import Myprofile from '../Layouts/Myprofile';

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
        },
        {
          path: "/lessons/:id",
          element: <Vocabulary></Vocabulary>,
          loader:async({params})=>{
            const res = await fetch("/lesson.json")
            const data = await res.json()
            console.log(params.id)
            const vocabularies = data.filter(d => d.lesson_no == params.id)
            return vocabularies; 
          }
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/reset",
          element: <Reset></Reset>
        },
        {
          path: "/profile",
          element: <Myprofile></Myprofile>
        }
      ]
    },
  ]);

export default Route;