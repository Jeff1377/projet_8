import React from 'react';
import './LogementsBanner.css';

function LogementsBanner (props) {
    return (
        <div className="logements_banner">
            <img src ={props.imageUrl} alt="banniere carrousel" />
        </div>
    )
}

export default LogementsBanner;