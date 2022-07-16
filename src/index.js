import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DataTable from "../src/Componentes/Tabela"
import TabelaDados from "../src/Componentes/Table"
import DataTable2 from "../src/Pages/testeTable"



ReactDOM.render(
  <React.StrictMode>
    {/* <App/>; */}
    {/* <DataTable/> */}
    <TabelaDados/>
    {/* <DataTable2/> */}

  </React.StrictMode>,

  document.getElementById("root")
);
