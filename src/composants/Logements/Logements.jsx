import React from 'react';
import './Logements.css';
import Collapse from '../Collapse/Collapse';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LogementsBanner from '../LogementsBanner/LogementsBanner';
import LogementsHeader from '../LogementsHeader/LogementsHeader';

function Logements() {

    const location = useLocation();
    const [thisHouse, setThisHouse] = useState(null);

    useEffect(fetchHouseData, []);

    function fetchHouseData() {
        fetch("annonces.json")
            .then((res) => res.json())
            .then((houses) => {
                const house = houses.find((house) => house.id === location.state.houseId);
                setThisHouse(house);
            })
            .catch(console.error);
    };
    
    /*pour éviter le reading cover "null"*/
    if (thisHouse == null) return <div>...chargement</div>;

    return(
        <div className="accoms_page">
            <LogementsBanner imageUrl={thisHouse.cover} />
            <div className="accom_insert1">
                <LogementsHeader title={thisHouse.title} description={thisHouse.description} location={thisHouse.location} tags={thisHouse.tags} name={thisHouse.host.name} picture={thisHouse.host.picture} rating={thisHouse.rating} key={thisHouse.id} />
            </div>
            <div className="accom_insert2">
                <Collapse title="Description" />
                <Collapse title="Equipements" />
            </div>
        </div>
    )
};

export default Logements;