import React from 'react';
import Navbar from '../composants/Navbar/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Carousel from '../pages/Carousel';
import Error from '../pages/Error';
import Footer from "../composants/Footer/Footer";
import { createBrowserRouter, Outlet } from 'react-router-dom';

const HeadFootLayout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
)};

const router = createBrowserRouter([
    {   
      element: <HeadFootLayout />,
      children: [
        {
        path: "/",
        element: <Home />
        },
        {
        path: "/about",
        element: <About />
        },
        {
        path: "/carousel",
        element: <Carousel />
        },
        {path: "/*",
        element: <Error />
        }
      ] 
    }
  ]);

  export default router;
