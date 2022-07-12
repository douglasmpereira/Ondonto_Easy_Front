import "./styles.css";
import { useState, useContext } from "react";
const Rec = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1 className="title">Esqueci minha senha</h1>
      <form className="card-login" onSubmit={handleSubmit}>
        <p className="subtitle">Calma! Vamos ajudar você com isso. :)</p>
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
            placeholder="E-mail cadastrado"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>

        <div className="actions">
          <button className="button" type="submit">
            Recuperar senha
          </button>
        </div>
      </form>

      <div className="options">
        <p>Ainda não tem uma conta gratuíta?</p>
        <a href="">Criar conta</a>
      </div>
    </>
  );
};
export default Rec;
