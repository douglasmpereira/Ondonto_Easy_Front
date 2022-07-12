import "./stylesCliente.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer } from 'react-icons/fa';
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Cadastro = () => {
    return(
        <>
        <div className="contCli container card field">
            <form>
            <div className=" row">
                <div className="col infoP"> 
                    <input type="text" placeholder="Nome " required />
                    <input type="text" placeholder="CPF" required />
                    <input type="text" placeholder="Data Nascimento " required />
                    <input type="text" placeholder="Telefone " required />
                   
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input type="text" placeholder="CEP " required />
                    <input type="text" placeholder="CIDADE" required />
                    <input type="text" placeholder="Complemento" required />
                </div>
                <div className="col">
                    <input type="text" placeholder="UF" required />
                    <input type="text" placeholder="Bairro" required />
                    <input type="text" width="40" placeholder="Nº" required />      
                </div>
           

                </div>
                <div className="row">
                <div className="col teste">
                    <input type="email" placeholder="Seu melhor @email " required />
                    <input type="text" placeholder="Senha" required />
                    <input type="text" placeholder="Repita sua senha" required />
                <div/>
            </div>
             <button type="submit" className="btnCadastrar mt-4">Cadastrar</button>
            </div>
            </form>
        </div>
    </>
    );
}

export default Cadastro;