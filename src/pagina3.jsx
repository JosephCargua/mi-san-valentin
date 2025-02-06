import React from "react";
import { useNavigate } from "react-router-dom";
import "./inicio.css";

const Pagina3 = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate("/san-valentin");
    };

    return (
        <div className="container">
            <p></p>
            <h1><span className="number">¡La pregunta del Millón se acerca! </span></h1>

            <ul className="reasons">
            <span className="cursive">Luego de un ánalisis obviamente profundisisisimo ajajaja
                me atrevo a hacerle la siguiente pregunta...........
            </span>
            
            </ul>

            <div className="image-container">
                <img src="../../public/imagenes/image2.png" alt="Imagen romántica" />
            </div>

            <button className="next-button" onClick={handleNextClick}>Siguiente</button>
        </div>
    );
}

export default Pagina3;
