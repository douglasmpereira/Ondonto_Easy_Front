import Table from 'react-bootstrap/Table';
import { getAgendamento } from '../service/axiosClient';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosGet from '../hooks/useAxiosGet';



const TabelaDados = () =>{

  const { tasks } = useAxiosGet('/agendamento')
  const [agendamentos, setAgendamentos] = useState([])
  const [status, setStatus] = useState("")


  useEffect(() => {
      if (!tasks) return
      setAgendamentos(tasks)
  }, [tasks])

    const mostrar = ()=> {
        console.log("apagou")
    } 
    const alteraStatus = (e, item)=> {

        const index = agendamentos.findIndex((agendamento)=> item.id===agendamento.id );
        const tempAgend = [...agendamentos]
        tempAgend[index].status = e.target.value;
        setAgendamentos(tempAgend)
    } 
    


    return (
    <>
    <div className="container" style={{widht: "50%", height: "70%"}} >
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Nome do Cliente</th>
          <th>Dia</th>
          <th>Hora</th>
          <th style={{width: "20%"}}>Status</th>
          <th>Serviço</th>
          <th>Funcionário</th>
        </tr>
      </thead>
    {agendamentos.map((item) =>
      <tbody key={item.id}>
        <tr>
          <td >{item.id}</td>
          <td>{item.cliente.nome}</td>
          <td>{item.dia}</td>
          <td>{item.hora}</td>
          <td>
          <select
              className="caixa form-select"
              value={item.status}
              onChange={(e) => alteraStatus(e, item )}  
               >
              <option className = "boxselect"  value="1">Aberto</option>
              <option className = "boxselect"  value="2">Finalizado</option>
              <option className = "boxselect"  value="3">Cancelado</option>
            </select>
          </td>
          <td>{item.servico.nome}</td>
          <td>{item.funcionario.nome}</td>
          <td><button onClick={mostrar}>Excluir</button></td> 
        </tr>
      </tbody>)}
    </Table>
    </div>
    
</>
  );
}
export default TabelaDados;