import React from 'react';
import App from '../App';
import Footer from '../composants/Footer';
import Navbar from '../composants/Navbar';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: "/",   
      element: (
          <>
              <Navbar />
              <App toto="test"/>
              <Footer />
          </>
      ),
      errorElement: <h1>404</h1>
    },
    {
      path: "/about",
      element: (
          <>
              <Navbar />
              <h1>A propos</h1>
              <Footer />
          </>
      )
    },
    {
      path: "/carousel",
      element: (
          <>
              <Navbar />
              <h1>Nos apparts</h1>
              <Footer />
          </>
      )
    },
  ]);

  export default router;
