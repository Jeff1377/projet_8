import React from 'react';
import './App.css';
import { RouterProvider } from "react-router-dom";
import Footer from './composants/Footer/Footer';
import router from './routes/router';

function App() {
   return (
      <>
     <div className="app_body">
        <RouterProvider router={router} />
     </div>
     <div>
      <Footer />
     </div>
     </>
   );
  }

  export default App;