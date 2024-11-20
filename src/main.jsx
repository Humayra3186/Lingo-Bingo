import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
 
  RouterProvider,
} from "react-router-dom";
import Route from './route/Route.jsx';
import AuthProvider from './AuthProvider.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={Route} />
    </AuthProvider>
 
  </StrictMode>,
)
