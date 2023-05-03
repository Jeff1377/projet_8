import React from 'react';
import './Collapse.css';

function Collapse(props) {
    return (
        <div className="description">
        <div className="description_title">
            <p>{props.title}</p>
            <i class="fa-solid fa-chevron-up fa-xl"></i>
        </div>
        <p className="description_content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore numquam quibusdam voluptate ad possimus ullam facilis quos incidunt suscipit, dolorum provident ipsum odit quam natus laboriosam perspiciatis corrupti, porro est quas temporibus quisquam inventore libero voluptatibus? Autem fuga eaque necessitatibus inventore. Doloribus dicta, ducimus unde ad voluptas facilis aut.
        </p>
        </div>
    )
};

export default Collapse;