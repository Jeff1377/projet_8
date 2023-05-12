import React from 'react';
import { useState } from 'react';
import './LogementsBanner.css';



function LogementsBanner (props) {
    const [currentImage, setCurrentImage] = useState(0);
    const grabClassName = (i) => {
        if (i === currentImage) return "visible";
        return "";
    };
    const goNext = () => {
        /*utilisation d'un modulo % pour boucler sur une array à l'infini
        en faisant en sorte que le nombre de sortie ne soit jamais plus gros que le facteur*/
        setCurrentImage((currentImage + 1) % props.imageCarousel.length);
    };
    const goPrevious = () => {
        /*au début, notre currentImage est à zéro et le new sera moins 1, mais si c'est une image < à zéro,
        notre nouvel index sera l'ensemble - 1 et "return" = tu t'arrêtes.
        Et sinon tu fais un currentImage - 1*/
        const newCurrentImage = currentImage - 1;
        if (newCurrentImage < 0) {
            setCurrentImage(props.imageCarousel.length - 1);
            return;
        }
        setCurrentImage(currentImage - 1);
    };

    return (
        <div className="logements_banner">
            <div className="image_container">
                {props.imageCarousel.map((picture, i) => (
                <img key={picture} src={picture} alt="pics carousel" className={grabClassName(i)}></img>
                ))};
            </div>
            { props.imageCarousel.length > 1 && 
            <>
                <button className="bouton bouton_previous" onClick={goPrevious}><i className="fas fa-chevron-left"></i></button>
                <button className="bouton bouton_next" onClick={goNext}><i className="fas fa-chevron-right"></i></button>
                <span className="slide_counter">
                    {currentImage + 1} / {props.imageCarousel.length}
                </span>
            </>
            }
        </div>
    );
};

export default LogementsBanner;