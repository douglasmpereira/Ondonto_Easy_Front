import Entrar from "../../Componentes/Entrar/index";
import HeaderPrincipal from "../../Componentes/headerPrincipal";
import "./styles.css";
import Logo from "../../imagens/logoSGT.jpeg";
const Login = () => {
  return (
    <>
      <HeaderPrincipal />
      <div className="login-container">
        <div className="login-banner">
          <img className="logo-login" src={Logo} alt="" />
        </div>
        <div className="login-form">
          <Entrar />
        </div>
      </div>
    </>
  );
};
export default Login;
