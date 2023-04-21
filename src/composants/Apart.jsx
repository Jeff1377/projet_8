import React from 'react';
import './Apart.css';
import {Link} from 'react-router-dom';


function Apart() {
    return (
        <div className="apart">
            <Link to="/carousel">
                <div className="apart_text">Titre de la location</div>
            </Link>
        </div>
    );
}

export default Apart;