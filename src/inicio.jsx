import React from "react";
import { useNavigate } from "react-router-dom";
import "./inicio.css";

const Reasons = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate("/Senales");
    };

    return (
        <div className="container">

            <h1><span className="number">5</span> <span className="red">Razones</span> <br/> por las que eres <br/> <span className="cursive">Mi Elección Perfecta</span></h1>

            <ul className="reasons">
                <li><span className="num">1</span> Tiene la sonrisa más linda del universo</li>
                <li><span className="num">2</span> Con usted, cualquier día se siente especial</li>
                <li><span className="num">3</span> Hace que mi corazón lata más rápido cada vez que le veo</li>
                <li><span className="num">4</span> Es mi persona favorita para compartir momentos</li>
                <li><span className="num">5</span> No imagino a nadie más a mi lado en este San Valentín</li>
            </ul>

            <div className="image-container">
                <img src="/imagenes/imagen1.jpg" alt="Imagen romántica" />
            </div>

            <button className="next-button" onClick={handleNextClick}>Siguiente</button>
        </div>
    );
}

export default Reasons;
