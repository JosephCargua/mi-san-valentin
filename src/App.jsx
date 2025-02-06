import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pagina1 from './pagina1';
import Inicio from './inicio';
import SanValentin from './SanValentin';
import Pagina2 from './pagina2';
import Pagina3 from './pagina3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pagina1 />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/Senales" element={<Pagina2 />} />
        <Route path="/Pregunta" element={<Pagina3 />} />
        <Route path="/san-valentin" element={<SanValentin />} />
      </Routes>
    </Router>
  );
}

export default App;