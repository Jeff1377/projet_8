import React from 'react';
import './Error404.css';
import { Link } from 'react-router-dom';

function Error404() {
    return(
        <div className="error404">
            <div className="error_main">404</div>
            <h1>Oups! La page que vous demandez n'existe pas.</h1>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
};

export default Error404;