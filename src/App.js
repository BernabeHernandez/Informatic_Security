import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutConEncabezado from './componentes/Layouts/LayoutConEncabezado';
import Cesar from './componentes/Publico/cifradoCesar';
import Escitala from './componentes/Publico/cifradoEscitala';
import Documentacion from './componentes/Publico/documentacion';
import Originalidad  from './componentes/Publico/Originalidad';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutConEncabezado><Cesar /></LayoutConEncabezado>} />
      <Route path="/CifradoCesar" element={<LayoutConEncabezado><Cesar /></LayoutConEncabezado>} />
      <Route path="/CifradoEscitala" element={<LayoutConEncabezado><Escitala /></LayoutConEncabezado>} />
      <Route path="/documentacion" element={<LayoutConEncabezado><Documentacion /></LayoutConEncabezado>} />
      <Route path="/originalidad" element={<LayoutConEncabezado><Originalidad /></LayoutConEncabezado>} />

    </Routes>
  );
};

export default App;
