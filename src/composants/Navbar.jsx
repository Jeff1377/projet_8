import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <img src="logo.png" alt="Logo" />
            </div>
            <Link to="/">
            <div>Accueil</div>
            </Link>
            <Link to="/about">
            <div>A propos</div>
            </Link>
        </nav>
    );
}

export default Navbar;