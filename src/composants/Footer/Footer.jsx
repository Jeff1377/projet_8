import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <div className="footer">
            <div className="footer_logo">
                <img src="logo.png" alt="Logo" />
            </div>
            <div className="footer_text">
            © 2020 Kasa. All rights reserved
            </div>
        </div>
    );
}

export default Footer;