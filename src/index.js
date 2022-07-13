import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HeaderPrincipal from './Componentes/headerPrincipal';
import HeaderSecundario from './Componentes/headerSecundario';
import CadastroAdmin from './Pages/cadastroAdmin';
import CadastroCliente from './Pages/cadastroCliente';
import Login from './Pages/Login';
import RecuperarSenha from './Pages/RecuperarSenha';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);
