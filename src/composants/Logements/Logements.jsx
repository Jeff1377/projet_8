import React from 'react';
import './Logements.css';
import Collapse from '../Collapse/Collapse';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogementsBanner from '../LogementsBanner/LogementsBanner';
import LogementsHeader from '../LogementsHeader/LogementsHeader';

function Logements() {
    const navigate = useNavigate();
    const location = useLocation();
    const [thisHouse, setThisHouse] = useState(null);

    useEffect(fetchHouseData, []);

    function fetchHouseData() {
        fetch("annonces.json")
            .then((res) => res.json())
            .then((houses) => {
                const house = houses.find((house) => house.id === location.state.houseId);
                if (!house) {
                    navigate("/*", { state: { message: "house not found" } });
                }
                else {
                    
                    setThisHouse(house);
                }
            })
            .catch(console.error);
    };
    
    /*pour éviter le reading cover "null"*/
    if (thisHouse == null) return <div>...loading...</div>;
    
    return(
        <div className="accoms_page">
            <LogementsBanner imageCarousel={thisHouse.pictures} />
            <div className="accom_insert1">
                <LogementsHeader title={thisHouse.title} description={thisHouse.description} location={thisHouse.location} tags={thisHouse.tags} name={thisHouse.host.name} picture={thisHouse.host.picture} rating={thisHouse.rating} />
            </div>
            <div className="accom_insert2">
                <Collapse title="Description" content={thisHouse.description} />
                <Collapse title="Equipements" content={thisHouse.equipments.map((equipments) => (
                    <li key={equipments}>{equipments}</li>
                ))} />
            </div>
        </div>
    )
};

export default Logements;