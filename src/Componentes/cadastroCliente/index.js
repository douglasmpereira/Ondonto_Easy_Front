import "./stylesCliente.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer } from 'react-icons/fa';
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Cadastro = () => {
    return(
        <>
        <div className="container row">

            <form className="  containerForm col-6 " >
                <div><FaBeer className="icon"/>
                    <input  type="text" placeholder='    Nome Completo ' required/>
                </div>

                <div><FaBeer className="icon"/>
                    <input type="text" placeholder='    Telefone ex: (22) 12345-6789' required/>
                </div>

                <div><FaBeer className="icon"/>
                    <input type="text" placeholder='    Data de nascimento ex: 01/01/2000' required/>
                </div>
                
                <div><FaBeer className="icon"/>
                    <input type="text" placeholder='    Seu melhor @email' required/>
                </div>

                <div><FaBeer className="icon"/>
                    <input className="senha" type="password" placeholder='    Digite sua senha' required/>
                </div>

                <div><FaBeer className="icon"/>
                <input className="senha" type="password" placeholder='    Repita sua senha' required/>
                </div>
                
                <div><FaBeer className="icon"/>
                    <input type="text" placeholder='    Digite seu CEP ex: 28000-000' required/>
                </div>

                <div><FaBeer className="icon"/>
                    <input type="text" placeholder='    Nº da casa'/>
                </div>

                <div><FaBeer className="icon"/>
                    <input type="text" placeholder='    Complemento'/>
                </div>
                
                <div>
                    <button type="submit" className="btnCadastrar">Cadastrar</button>
                    
                </div>
            </form>
            
            </div>
        </>
    );
}

export default Cadastro;