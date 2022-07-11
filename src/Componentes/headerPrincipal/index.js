import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FaStore } from "react-icons/fa";
import "./header1.css";
import logo from "../../imagens/iconeSGT.PNG"

const HeaderPrincipal = () => {
  return (
    <>
      <div className="header">
        <Navbar className="navbar ms-3">
          <Navbar.Brand href="/home">
            <img class="imagem" src={logo} alt="Logotipo do site, SGT"/>
          </Navbar.Brand>
          <Nav className="me-auto ">   
          </Nav>
          <Nav.Link
            className="login me-3"
            href="/login"
          >
            CADASTRAR{" "}
          </Nav.Link>
        </Navbar>
      </div>
    </>
  );
};
export default HeaderPrincipal;
