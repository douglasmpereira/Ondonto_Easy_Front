import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FaStore } from "react-icons/fa";
import "./header2.css";
import logo from "../../imagens/iconeSGTBranco.PNG"

const HeaderSecundario = () => {
  return (
    <>
      <div className="header2">
        <Navbar className="navbar ms-3">
          <Navbar.Brand href="/home">
            <img class="imagem" src={logo} alt="Logotipo do site, SGT"/>
          </Navbar.Brand>
          <Nav className="me-auto "> 
          <Nav.Link className="home" href="/home">
              Home
            </Nav.Link>
            <Nav.Link className="dashboards" href="/dashboards">
              DashBoards
            </Nav.Link>
            <Nav.Link className="titulosgt" href="/home">
              SISTEMA DE GESTÃO DE TICKETS
            </Nav.Link>  
          </Nav>
          <Nav.Link
            className="login2 me-3"
            href="/login"
          >
            CADASTRAR{" "}
          </Nav.Link>
        </Navbar>
      </div>
    </>
  );
};
export default HeaderSecundario;
