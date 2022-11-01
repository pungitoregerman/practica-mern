import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Los estilos son los unicos que se importan directamente
import App from './App';
// LA ESTRUCTURA DE LO QUE IMPORTA ES LA SIGUIENTE:
// 1- SE ESCRIBE IMPORT
// 2- EL NOMBRE DE QUE COSA NECESITO (IMPORTA)
// 3- DESPUES DESDE DONDE (FROM) 
// 4- ESCRBIO LA RUTA DE LO QUE NECESITO
// (1)import (2)React (3)from (4)'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

//TODO LO QUE NECESITE (LINKEADO) IMPORTAR / EXPORTAR