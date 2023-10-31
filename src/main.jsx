import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Services from './Pages/Home/Service/Services';
import About from './Pages/Home/About';
import LogIn from './Pages/Login/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import AuthProviders from './Providers/AuthProviders';

import BookService from './Pages/BookService/BookService';
import Bookings from './Pages/Bookings/Bookings';
import PrivateRoute from './Routes/PrivateRoutes';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element:<LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element:<SignUp></SignUp>,
      },
       
      {
        path: 'book/:id', 
        element: <PrivateRoute><BookService></BookService></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'bookings',
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
      }

      

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProviders>
      <RouterProvider router={router} />
      </AuthProviders>
    </React.StrictMode>
  </div>
)
