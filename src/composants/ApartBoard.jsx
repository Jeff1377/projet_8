import React from 'react';
import './ApartBoard.css';
import Apart from './Apart.jsx';

function ApartBoard() {
    return (
        <div className="board">
            <Apart />
            <Apart />
            <Apart />
            <Apart />
            <Apart />
            <Apart />
        </div>
    );
}

export default ApartBoard;