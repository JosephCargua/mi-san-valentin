import React from "react";
import { useNavigate } from "react-router-dom";
import "./inicio.css";

const Pagina1 = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/inicio");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b ">
      <div className="relative w-96 h-80">
        {/* Sobre */}
        <div className="absolute bottom-0 w-full h-48 bg-red-600 clip-bottom shadow-lg" />
        <div className="absolute bottom-0 w-full h-48 bg-red-500 clip-bottom rotate-180 shadow-md" />
        
        {/* Carta */}
        <div className="absolute w-full h-64 bg-white shadow-2xl rounded-xl p-6 flex flex-col items-center">
          <div className="text-center">
            <div className="text-red-500 text-4xl animate-bounce">❤️</div>
            <p className="text-red-700 font-semibold mt-4 text-lg">
              Cuanto más tiempo estoy contigo
            </p>
            <p className="text-red-700 font-bold text-xl">más te amo!</p>
            <div className="mt-6 text-2xl">🌻🌼🌸</div>
          </div>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition" onClick={handleNextClick}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagina1;
