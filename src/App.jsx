import React from 'react';
import Navbar from './composants/Navbar.jsx';
import './App.css';
import Banner from './composants/Banner.jsx';
import ApartBoard from './composants/ApartBoard.jsx';
import Footer from './composants/Footer.jsx';

function App() {
 return (
 <div>
    <Navbar />
    <Banner />
    <ApartBoard />
    <Footer />
 </div>
 );
}

export default App;
