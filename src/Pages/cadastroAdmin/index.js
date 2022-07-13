
import "./cadastroAdmin.css";
import HeaderPrincipal from "../../Componentes/headerPrincipal"
import HeaderSecundario from '../../Componentes/headerSecundario';
import Perfil from "../../Componentes/perfil";
import CadastrarAdmin from "../../Componentes/cadastrarAdmin";
import { useState, useEffect } from 'react'
import api from "../../Componentes/service/api";
import useAxiosGet from "../../Componentes/hooks/useAxiosGet";



const CadastroAdmin =()=>{
    
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [cargo, setCargo] = useState(0)
    const [idPFuncionario, setIdFuncionario] = useState(0)
    // const [editando, setEditando] = useState({ edit: false, id: null })
    const [funcionarios, setFuncionarios] = useState([])

    const adicionarFuncionario = async () => {
        if (nome === "" || cpf === "" || email === "" || senha === "") {
            return alert("PREENCHA TODOS OS CAMPOS")
        }

        const novoFuncionario = {

            nome: nome,
            cpf: cpf,
            email: email,
            senha: senha,
            idCargo: cargo

        }

        alert("CADASTRADO REALIZADO COM SUCESSO!")
        const { data } = await api.post('/cliente', novoFuncionario)

        setFuncionarios([
            ...funcionarios,
            data
        ])

        setIdFuncionario("")
        setNome("")
        setCpf("")
        setEmail("")
        setSenha("")
        setCargo(0)

    }

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
              <CadastrarAdmin adicionarFuncionario={adicionarFuncionario} nome={nome} setNome={setNome}
               email={email} setEmail={setEmail} senha={senha} setSenha={setSenha} cargo={cargo} setCargo={setCargo}
               cpf={cpf} setCpf={setCpf} />
            </div>
            <div className="col-md-6 mt-4">
            <img className="photo" src="https://img.freepik.com/vetores-gratis/dente-tridimensional-isolado-com-versao-frontal-e-corte_1284-47395.jpg?t=st=1657572656~exp=1657573256~hmac=71cb0c8a94746459ae70ea7ff001c7d403259e0096f3e3da3599798b2bf46df5&w=740"
             width="80%" height="80%"  alt="dente ilustrativo" />      
            </div>
          </div>
       </div>
       </>
    );
}
export default CadastroAdmin;