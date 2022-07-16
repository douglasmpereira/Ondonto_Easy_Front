import Table from 'react-bootstrap/Table';
import { getAgendamento } from '../service/axiosClient';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosGet from '../hooks/useAxiosGet';
import Form from 'react-bootstrap/Form';
import "./table.css"



const TabelaDados = () =>{

  const { tasks } = useAxiosGet('/agendamento')
  const [agendamentos, setAgendamentos] = useState([])
  const [status, setStatus] = useState("")
  const [itensPerPage, setItensPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)
  const [marcacao, setMarcacao] = useState([])

  
  useEffect(() => {
      if (!tasks) return
      setAgendamentos(tasks)
  }, [tasks])

    const mostrar = (item)=> {
        console.log("apagou")
        console.log(item.id)
        
    } 

    const alteraStatus = (e, item)=> {

        const index = agendamentos.findIndex((agendamento)=> item.id===agendamento.id );
        const tempAgend = [...agendamentos]
        tempAgend[index].status = e.target.value;
        setAgendamentos(tempAgend)
    } 

    const pages = Math.ceil(agendamentos.length/itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentIndex = agendamentos.slice(startIndex, endIndex)
    
    useEffect(()=> {
      setCurrentPage(0)
    },[itensPerPage]);

    const verMarcado = (id) =>marcacao.indexOf(id)>-1;

    const marcar = (id)=> {
      if(verMarcado(id)){
        setMarcacao((arrayAnterior)=> arrayAnterior.filter((item)=> item!==id ) );
      }else{

      setMarcacao((arrayAnterior)=> [...arrayAnterior, id] );
    }};

  //  marcacao.forEach((item) => deletar(item))

    return (
    <>
    <div className="container" style={{widht: "50%", height: "70%"}} >
      <div>
        <select value={itensPerPage} onChange={(e)=> setItensPerPage(Number(e.target.value))}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
        </select>
      </div>
      <div>
       { Array.from(Array(pages), (agendamentos, index) => {
          return <button value={index} 
          onClick={(e)=>{setCurrentPage(Number(e.target.value))}}
          style={index===currentPage? {backgroundColor: "gray"}: null}
          >
          {index+1}
          </button>
       })}
    </div>
    <button onClick={()=>{console.log(marcacao)}}>aperte</button>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>teste</th>
          <th>id</th>
          <th>Nome do Cliente</th>
          <th>Dia</th>
          <th>Hora</th>
          <th style={{width: "20%"}}>Status</th>
          <th>Serviço</th>
          <th>Funcionário</th>
        </tr>
      </thead>
    {currentIndex.map((item) =>
      <tbody key={item.id}>
        <tr>
          <td className='check'>
          <Form.Check checked={verMarcado(item.id)} onClick={()=> {marcar(item.id)}}
          style={{alignItems: "center", justifyContent: "center", display: "flex"}}/>
          </td>
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
          <td><button onClick={()=> {mostrar(item)}}>Excluir</button></td> 
        </tr>
      </tbody>)}
    </Table>
    </div>
    
</>
  );
}
export default TabelaDados;