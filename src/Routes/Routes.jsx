import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Home/Services/Services";
import About from "../Pages/Home/About/About";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
            
        },
        {
            path: '/services',
            element: <Services></Services>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/contact', 
        }
      ]
    },
  ]);