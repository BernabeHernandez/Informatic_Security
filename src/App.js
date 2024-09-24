import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutConEncabezado from './componentes/Layouts/LayoutConEncabezado';
import PaginaAdministrativa from './paginas/PaginaAdministrativa';
import Cesar from './componentes/Publico/cifradoCesar';
import Escitala from './componentes/Publico/cifradoEscitala';
import Documentacion from './componentes/Publico/documentacion';
import Originalidad  from './componentes/Publico/Originalidad';

const App = () => {
  return (
    <Routes>
      <Route path="/admin" element={<LayoutConEncabezado><PaginaAdministrativa /></LayoutConEncabezado>} />
      <Route path="/admin/cifrado" element={<LayoutConEncabezado><Cesar /></LayoutConEncabezado>} />
      <Route path="/admin/escitala" element={<LayoutConEncabezado><Escitala /></LayoutConEncabezado>} />
      <Route path="/admin/documentacion" element={<LayoutConEncabezado><Documentacion /></LayoutConEncabezado>} />
      <Route path="/admin/originalidad" element={<LayoutConEncabezado><Originalidad /></LayoutConEncabezado>} />

    </Routes>
  );
};

export default App;
