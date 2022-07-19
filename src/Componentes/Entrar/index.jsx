import "./styles.css";
import { useState, useEffect } from 'react';
import { Nav } from "react-bootstrap";
import ModalMenu from "../modal";
import { getCliente } from '../service/ClienteService/index';
import { getAdmin } from './../service/AdminService/index';
import { getFuncionario } from './../service/FuncionarioService/index';

const Entrar = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  const [admin, setAdmin] = useState([]);
  const [funcionario, setFuncionario] = useState([]);
  const [clientes, setClientes] = useState([]);

  useEffect(()=> {
    getAdmin().then((response) => {
      console.log(response)
      setAdmin(response);
    });
  },[admin]);
  
  useEffect(()=> {
    getFuncionario().then((response) => {
      console.log(response)
      setFuncionario(response);
    });
  },[funcionario]);
  
  useEffect(()=> {
  getCliente().then((response) => {
    console.log(response)
    setClientes(response);
  });
},[clientes]);

  const VerificarLogin = () => {
    admin.map((admin) => {
      if(login === admin.email && senha === admin.senha){
        alert(`Olá ${admin.nome}`);
      }else{
        

      funcionario.map((funcionario) => {
        if(login === funcionario.email && senha === funcionario.senha && funcionario.cargo.id === 1){
          alert(`Olá ${funcionario.nome}`);
        } else if (login === funcionario.email && senha === funcionario.senha && funcionario.cargo.id === 2){
          alert(`Olá ${funcionario.nome}`);
        } else {
          clientes.map((cliente) => {
            if(login === cliente.email && senha === cliente.senha){
              alert(`Òlá ${cliente.nome}`);
          } else {
              alert("Login ou senha inválidos")
            }
          }
        )}
      })
    }})
  }

  return (
    <>
      <h1 className="title">Já tem cadastro?</h1>
      <form className="card-login" onSubmit={handleSubmit}>
        <p className="subtitle">Faça seu login e "Make it easier".</p>
        <div className="field">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
          </svg>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="field">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 0 1 0-8 0v1h8zm-5 6v2h2v-2h-2zm-4 0v2h2v-2H7zm8 0v2h2v-2h-2z"></path>
            </g>
          </svg>
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="actions">
          <button className="button" type="submit" onClick={VerificarLogin}>
            Entrar
          </button>
        </div>
      </form>

      <div className="options">
        <a href="">Esqueceu senha?</a>
        <Nav.Link
           
            href="/cadastroCliente"
          >
            CADASTRAR{" "}
          </Nav.Link>
          <Nav.Link
           
            href="/CadastroAdmin"
          >
            ADMIN{" "}
          </Nav.Link>
          <ModalMenu/>
      </div>
    </>
  );
};
export default Entrar;
