import { useState, useEffect } from 'react'
import api from "../service/api"
import useAxiosGet from "../hooks/useAxiosGet";
import CadastroCliente from '../../Pages/cadastroCliente';


const Cliente = () => {
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [cpf, setCpf] = useState("")
    const [dtnascimento, setDtnascimento] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [cep, setCep] = useState("")
    const [idPCliente, setIdCliente] = useState(0)
    // const [editando, setEditando] = useState({ edit: false, id: null })
    const { tasks } = useAxiosGet('/clientes')
    const [clientes, setClientes] = useState([])

    useEffect(() => {
        if (!tasks) return
        setClientes(tasks)
       // setIdProduto(tasks.length)
    }, [tasks])

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
    return(
        <>
        <CadastroCliente nome={nome} setNome={setNome} telefone={telefone} setTelefone={setTelefone}
                cpf={cpf} setCpf={setCpf} dtnascimento={dtnascimento} setDtnascimento={setDtnascimento}
                email={email} setEmail={setEmail} senha={senha} setSenha={setSenha}
                cep={cep} setCep={setCep} adicionar={adicionarCliente}
                />
                </>
    )
}
export default Cliente;