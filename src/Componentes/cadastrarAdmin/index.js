import "./stylesAdmin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBeer } from "react-icons/fa";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { MdEmail } from "react-icons/md";


const CadastrarAdmin = ({adicionarFuncionario, nome, setNome, email, setEmail, senha, setSenha, cpf, setCpf, cargo, setCargo}) => {
  return (
    <>
    <div className="contAdmin container">
        <div className=" row mt-4 ">
            <div className="col"> 

            <select
              className="caixa form-select"
              value={cargo}
              onChange={(e) => setCargo(e.target.value )}>
              <option className = "boxselect" value="0" disabled selected>Insira um Cargo</option>
              <option className = "boxselect"  value="1">Dentista</option>
              <option className = "boxselect"  value="2">Recepcionista</option>
            </select>

            <input className="inputAdmin" type="text" placeholder="Nome " required value={nome} onChange={(e) => setNome(e.target.value)}/>
            <input className="inputAdmin" type="text" placeholder="CPF " required value={cpf} onChange={(e) => setCpf(e.target.value)}/>
            <input className="inputAdmin" type="text" placeholder="E-mail " required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="inputAdmin" type="text" placeholder="Senha " required value={senha} onChange={(e) => setSenha(e.target.value)}/>
         <button type="button" className="btnCadastrar1 mt-4" onClick={adicionarFuncionario}>Cadastrar</button>
            </div>
        </div>
    </div>
      
    </>
  );
};
<div>
              <FaBeer className="icon" />
              <input type="text" placeholder="    Nome Completo " required />
            </div>

export default CadastrarAdmin;
