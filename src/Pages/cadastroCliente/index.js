import Cadastro from "../../Componentes/cadastroCliente";
import "./cadastroCliente.css"
import HeaderPrincipal from "../../Componentes/headerPrincipal/index";
import LoginCadastro from "../../imagens/LoginCadastro.png"

const CadastroCliente = () => {
  return (
    <div className="corpo">
      <HeaderPrincipal/>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <img
              className="photo"
              src={LoginCadastro}
              width="80%"            
              height="100%"
              alt="img"
            />
          </div>
          <div className="col-md-6 " >
            <h1 className="tit1 text-center">Faça seu cadastro agora !</h1>
            <h3 className="tit2 text-center">Crie sua conta e make it Easier</h3>
            <Cadastro />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CadastroCliente;
