import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HeaderPrincipal from './Componentes/headerPrincipal';
import HeaderSecundario from './Componentes/headerSecundario';
import CadastroAdmin from './Pages/cadastroAdmin';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    
    <CadastroAdmin/>
  </React.StrictMode>
  
);


