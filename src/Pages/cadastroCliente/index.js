import Cadastro from "../../Componentes/cadastroCliente";
import "./cadastroCliente.css"
import HeaderPrincipal from "../../Componentes/headerPrincipal/index";
import LoginCadastro from "../../imagens/LoginCadastro.png"
import { useState, useEffect } from 'react'
import api from "../../Componentes/service/api";
import useAxiosGet from "../../Componentes/hooks/useAxiosGet";


const CadastroCliente = () => {

    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [cpf, setCpf] = useState("")
    const [dtnascimento, setDtnascimento] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [cep, setCep] = useState("")
    const [idPCliente, setIdCliente] = useState(0)
    // const [editando, setEditando] = useState({ edit: false, id: null })
    const [clientes, setClientes] = useState([])

    const adicionarCliente = async () => {
        if (nome === "" || telefone === "" || cpf === "" ||
            dtnascimento === "" || email === "" || senha === "" || cep==="") {
            return alert("PREENCHA TODOS OS CAMPOS")
        }

        const novoCliente = {

            nome: nome,
            telefone: telefone,
            cpf: cpf,
            dt_nascimento: dtnascimento,
            email: email,
            senha: senha,
            cep: cep

        }
        alert("CLIENTE CADASTRADO COM SUCESSO!")
        const { data } = await api.post('/cliente', novoCliente)

        setClientes([
            ...clientes,
            data
        ])

        setIdCliente("")
        setNome("")
        setTelefone("")
        setCpf("")
        setDtnascimento("")
        setEmail("")
        setSenha("")
        setCep("")
    }


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
          <div className="col-md-6 mt-5" >
            <h1 className="tit1 text-center">Faça seu cadastro agora !</h1>
            <h3 className="tit2 text-center">Crie sua conta e make it Easier</h3>
            <Cadastro adicionarCliente={adicionarCliente} nome={nome} setNome={setNome} telefone={telefone} 
            setTelefone={setTelefone}
                cpf={cpf} setCpf={setCpf} dtnascimento={dtnascimento} setDtnascimento={setDtnascimento}
                email={email} setEmail={setEmail} senha={senha} setSenha={setSenha}
                cep={cep} setCep={setCep}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CadastroCliente;
