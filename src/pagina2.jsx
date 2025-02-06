import React from "react";
import { useNavigate } from "react-router-dom";
import "./inicio.css";

const Pagina2 = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate("/Pregunta");
    };

    return (
        <div className="container">


            <ul className="reasons">
            <h1><span className="number">Investigación Especial</span><span className="cursive">Señales por las que debe decir que "Si" </span></h1>
            <li><span className="num">❤️</span> Si está leyendo esto, es porque el destino nos unió</li>
                <li><span className="num">❤️</span> Si sonreó al menos una vez, es una clara señal</li>
                <li><span className="num">❤️</span> Si su corazón latió más rápido, sabes que esto es especial</li>
                <li><span className="num">❤️</span> Si cada momento juntos se siente único, somos un match perfecto</li>
            </ul>

            <div className="image-container">
                <img src="/imagenes/imagen2.jpg" alt="Imagen romántica" />
            </div>

            <button className="next-button" onClick={handleNextClick}>Siguiente</button>
        </div>
    );
}

export default Pagina2;
