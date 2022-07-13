import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HeaderPrincipal from './Componentes/headerPrincipal';
import HeaderSecundario from './Componentes/headerSecundario';
import CadastroAdmin from './Pages/cadastroAdmin';
import CadastroCliente from './Pages/cadastroCliente';
import Login from './Pages/Login';
import RecuperarSenha from './Pages/RecuperarSenha';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    
    <CadastroAdmin/>
    <CadastroCliente/>
    <Login/>
    {/* <RecuperarSenha/> */}
  </React.StrictMode>
  
  
);


