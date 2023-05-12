import React from 'react';
import Banner from '../composants/Banner/Banner';
import Collapse from '../composants/Collapse/Collapse';
import { useState, useEffect } from 'react';
import "./About.css";

function About () {
    const [contents, setContents] = useState([]);

    useEffect(fetchContents, []);

    function fetchContents() {
        fetch("about_collapse_content.json")
            .then((res) => res.json())
            .then((res) => setContents(res))
            .catch(console.error);
    };

    return (
        <>
            <Banner />
            <div className="about_bloc">
                {contents.map((content) => (
                <Collapse title={content.title} content={content.content} id={content.id} key={content.id} />
                ))}
            </div>
        </>
    )
};

export default About;