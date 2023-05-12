import React from 'react';
import './LogementsHeader.css';

function LogementsHeader (props) {
    return (
        <>
        <div className="accom_description">
            <h1 className="accom_title">{props.title}</h1>
            <h2 className="accom_text">{props.location}</h2>
            <div className="accom_plus">
                {props.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
        </div>
        <div className="accom_owner">
            <div className="owner_space">
                <div className="owner_name">
                    <span>{props.name}</span>
                </div>
                <div className="owner_pic">
                    <img src={props.picture} alt="pp" />
                </div>
            </div>
            <div className="owner_stars">
                {[1, 2, 3, 4, 5].map((number) => (
                    <span key={number} className={props.rating >= number ? "fill" : ""}><i className="fa-sharp fa-solid fa-star fa-xl"></i></span>
                ))}
            </div>
        </div>
        </>
    )
}
export default LogementsHeader; 