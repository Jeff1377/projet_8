import React from 'react';
import { useState } from 'react';
import './Collapse.css';

function Collapse(props) {
    const [isContentUnfold, setIsContentUnfold] = useState(false);
    const unfoldContent = () => {
        setIsContentUnfold(!isContentUnfold);
    };
    const chevronClass = (isContentUnfold ? "fa-chevron-up" : "fa-chevron-down") + " fas";

    return (
        <div className="description">
            <div className="description_title" onClick={unfoldContent}>
                <p>{props.title}</p>
                <i className={chevronClass}></i>
            </div>
            {isContentUnfold && <p className="description_content">{props.content}</p>}
        </div>
    )
};

export default Collapse;