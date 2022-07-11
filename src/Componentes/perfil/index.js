
import { FcBusinessman } from "react-icons/fc";
import "./perfil.css"

const Perfil = () => {
    return(
        <>
        <div className="cperfil container">
            <div className="row">
                <div className="col-md-4 mt-2">
                    <FcBusinessman size={35}/>
                </div>
                <div className="col-md-8">
                    <div className="perfil row">Administrador</div>
                    <div className="perfil row">Administrador</div> 
                </div>
            </div>
        </div>
        </>

    )
}
export default Perfil;