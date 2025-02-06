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
            <p></p>
            <h1><span className="number">5</span> <span className="red">Razones</span> <br/> por las que eres <br/> <span className="cursive">Mi Elección Perfecta</span></h1>

            <ul className="reasons">
                <li><span className="num">1</span> Tienes la sonrisa más linda del universo</li>
                <li><span className="num">2</span> Contigo, cualquier día se siente especial</li>
                <li><span className="num">3</span> Haces que mi corazón lata más rápido cada vez que te veo</li>
                <li><span className="num">4</span> Eres mi persona favorita para compartir momentos</li>
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
