import React, { useState, useEffect } from 'react';
import './ApartBoard.css';
import Apart from "../Apart/Apart";

function ApartBoard() {
    const [houses, setHouses] = useState([]);

    useEffect(fetchHouses, []);

    function fetchHouses() {
        fetch("annonces.json")
            .then((res) => res.json())
            .then((res) => setHouses(res))
            .catch(console.error);
    };

    return (
        <div className="board">
            {houses.map((house) => (
            <Apart title={house.title} imageUrl={house.cover} id={house.id} key={house.id} />
            ))}
        </div>
    );
};

export default ApartBoard;