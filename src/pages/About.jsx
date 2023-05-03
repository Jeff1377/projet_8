import React from 'react';
import Banner from '../composants/Banner/Banner';
import Collapse from '../composants/Collapse/Collapse';
import "./About.css";

function About () {
    return(
        <>
            <Banner />
            <div className="about_bloc">
                <Collapse />
                <Collapse />
                <Collapse />
                <Collapse />
            </div>
        </>
    )
};

export default About;