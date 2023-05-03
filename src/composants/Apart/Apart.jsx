import React from 'react';
import './Apart.css';
import {Link} from 'react-router-dom';


function Apart(props) {
    const state = {
        houseId: props.id
    };

    return (
        <div className="apart">
            <Link to="/carousel" state={state}>
                <img src={props.imageUrl} alt="Photo apart" />
                <div className="apart_text">{props.title}</div>
            </Link>
        </div>
    );
}

export default Apart;