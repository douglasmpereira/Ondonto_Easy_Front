import "./stylesAdmin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBeer } from "react-icons/fa";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { MdEmail } from "react-icons/md";


const CadastrarAdmin = () => {
  return (
    <>
    <div className="contAdmin container">
        <div className=" row mt-4 ">
            <div className="col"> 

            <input className="inputAdmin" type="text" placeholder="Cargo " required />
            <input className="inputAdmin" type="text" placeholder="Nome " required />
            <input className="inputAdmin" type="text" placeholder="CPF " required />
            <input className="inputAdmin" type="text" placeholder="E-mail " required />
            <input className="inputAdmin" type="text" placeholder="Senha " required />
         <button type="submit" className="btnCadastrar1 mt-4">Cadastrar</button>
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
