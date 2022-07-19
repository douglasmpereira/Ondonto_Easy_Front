import {Route, BrowserRouter, Routes} from "react-router-dom"
import CadastroAdmin from "../Pages/cadastroAdmin";
import CadastroCliente from "../Pages/cadastroCliente";
import Login from "../Pages/Login";
import RecuperarSenha from "../Pages/RecuperarSenha";

export default function ApplicationRoutes(){

    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login/>} />
               <Route path="/login" element={<Login/>} />
               <Route path="/cadastroCliente" element={<CadastroCliente/>} />
               <Route path="/cadastroAdmin" element={<CadastroAdmin/>} />
               <Route path="/RecuperarSenha" element={<RecuperarSenha/>} />
            </Routes>
        </BrowserRouter>
    );
}