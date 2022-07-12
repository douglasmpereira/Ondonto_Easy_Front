
import "./cadastroAdmin.css";
import HeaderPrincipal from "../../Componentes/headerPrincipal"
import HeaderSecundario from '../../Componentes/headerSecundario';
import Perfil from "../../Componentes/perfil";
import CadastrarAdmin from "../../Componentes/cadastrarAdmin";




const CadastroAdmin =()=>{
    return (
        <>
        <HeaderSecundario/>
        <div className="container dadosClin" >
            <div className="row">
                <div className="dadosClinica col-md-4">
                <Perfil/>
                </div>
                <div className="dadosClinica col-md-8 mt-2">
                    Email: OdontoTech@gmail.com, Local: Rua Ernesto, 258 - Centro, Telefone: 24 992626653
                </div>
                
            </div>
        </div>
       <div className="container">
          <div className="row">
            <div className="col-md-6">
                <div className="titulocad text-center">Cadastrar Usuarios</div>
              <CadastrarAdmin/>
            </div>
            <div className="col-md-6 mt-4">
            <img className="photo" src="https://img.freepik.com/vetores-gratis/dente-tridimensional-isolado-com-versao-frontal-e-corte_1284-47395.jpg?t=st=1657572656~exp=1657573256~hmac=71cb0c8a94746459ae70ea7ff001c7d403259e0096f3e3da3599798b2bf46df5&w=740" width="100%"
                height="70%"  alt="dente ilustrativo" />      
            </div>
          </div>
       </div>
       </>
    );
}
export default CadastroAdmin;