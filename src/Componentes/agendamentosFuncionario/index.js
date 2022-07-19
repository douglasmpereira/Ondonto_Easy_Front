import "./tabela.css";
import  TabelaDados from "../Table"
import { getAgendamento } from '../service/axiosClient';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosGet from '../hooks/useAxiosGet';



const AgendamentosFuncionario = () => {

    const { tasks } = useAxiosGet('/agendamento')
    const [agendamentos, setAgendamentos] = useState([])
    const [status, setStatus] = useState("")

    
    useEffect(() => {
        if (!tasks) return
        setAgendamentos(tasks)
    }, [tasks])

    return (
        <TabelaDados agendamentos={agendamentos} setAgendamentos={setAgendamentos}/>
    );
}
export default AgendamentosFuncionario;