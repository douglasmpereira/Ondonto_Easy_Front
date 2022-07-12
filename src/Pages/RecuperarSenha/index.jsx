import Rec from "../../Componentes/Rec/index";
import HeaderPrincipal from "../../Componentes/headerPrincipal";
import Logo from "../../imagens/LoginCadastro.png";
import "./styles.css";
const RecuperarSenha = () => {
  return (
    <>
      <HeaderPrincipal />
      <div className="login-container">
        <div className="login-banner">
          <img class="logo-rec" src={Logo} alt="" />
        </div>
        <div className="login-form">
          <Rec />
        </div>
      </div>
    </>
  );
};
export default RecuperarSenha;
