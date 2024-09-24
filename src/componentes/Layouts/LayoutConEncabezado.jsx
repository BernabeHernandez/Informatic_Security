import React from 'react';
import { useLocation } from 'react-router-dom';
import EncabezadoAdministrativo from '../Compartidos/EncabezadoAdministrativo';
import PieDePaginaCliente from '../Compartidos/PieDePaginaAdmin';


const LayoutConEncabezado = ({ children }) => {
  const location = useLocation();
  let encabezado;
  let pieDePagina;

  if (location.pathname.startsWith('/')) {
    encabezado = <EncabezadoAdministrativo />;
    pieDePagina=<PieDePaginaCliente/>;
  } 
  return (
    <>
      {encabezado}
      <div>
        {children}
        {pieDePagina}
      </div>
    </>
  );
};

export default LayoutConEncabezado;
