import Table from "react-bootstrap/Table";
import { getAgendamento } from "../service/axiosClient";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosGet from "../hooks/useAxiosGet";
import Form from "react-bootstrap/Form";
import "./table.css";
import { FaTrashAlt } from "react-icons/fa";
import api from "../service/api";
import Pagination from 'react-bootstrap/Pagination';

const TabelaDados = ({ agendamentos, setAgendamentos }) => {
  const [itensPerPage, setItensPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);
  const [marcacao, setMarcacao] = useState([]);
  const [marcado, setMarcado] = useState(false);

  const mostrar = (item) => {
    console.log("apagou");
    console.log(item.id);
  };

  const alteraStatus = (e, item) => {
    const index = agendamentos.findIndex(
      (agendamento) => item.id === agendamento.id
    );
    const tempAgend = [...agendamentos];
    tempAgend[index].status = e.target.value;
    setAgendamentos(tempAgend);
    console.log("alterou");
  };
  // const salvarNovoStatus = async ()=> {
  //   const statusEditado = {
  //     status: status,
  //   }
  //   const agendamentosEditados = agendamentos.map (agendamento => {
  //     if(agendamento.)
  //   })
  // }

  const pages = Math.ceil(agendamentos.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentIndex = agendamentos.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(0);
  }, [itensPerPage]);


  // const trocar = () =>{
  //   marcado===true? setMarcado(false) : setMarcado(true)
  // }
  // const marcarTodos = () => {
  //   if (marcado===true) {
  //     agendamentos.map((item)=>{
  //       setMarcacao(item.id);
  //     } );
  //   }
  // };

  const verMarcado = (id) => marcacao.indexOf(id) > -1;

  const marcar = (id) => {
    if (verMarcado(id)) {
      setMarcacao((arrayAnterior) =>
        arrayAnterior.filter((item) => item !== id)
      );
    } else {
      setMarcacao((arrayAnterior) => [...arrayAnterior, id]);
    }
  };

  const excluirUmAgendamento = async (item) => {
    const agendamentosFiltrados = agendamentos.filter(
      (agendamento) => agendamentos.id !== item.id
    );
    setAgendamentos(agendamentosFiltrados);
    alert(
      "Agendamento código " +
        item.id +
        " cliente " +
        item.cliente.nome +
        " excluído com sucesso!"
    );
    const { data: produtoExcluido } = await api.delete(
      `/agendamento/${item.id}`
    );
  };

  const excluirAgendamentos = async () => {
    let i = 0;
    for (i = 0; i < marcacao.length; i++) {
      const agendamentosFiltrados = agendamentos.filter(
        (agendamento) => agendamento.id !== marcacao[i]
      );
      console.log(marcacao[i]);
      setAgendamentos(agendamentosFiltrados);
      const { data: produtoExcluido } = await api.delete(
        `/agendamento/${marcacao[i]}`
      );
    }
    setMarcacao([]);
    console.log(agendamentos);
    return alert("Itens excluidos");
  };
  //  marcacao.forEach((item) => deletar(item))

  return (
    <>
      <div className="contTab container">
        <div className="r1Tab row">
          <div className="col-sm">
            <label>Agendamentos por Página</label>
            <select
              className="quantPerPag"
              value={itensPerPage}
              onChange={(e) => setItensPerPage(Number(e.target.value))}
            >
              <option value="4">4</option>
              <option value="8">8</option>
              {/* <option value="25">25</option> */}
            </select>
          </div>
          <div className="col-sm text-end me-2">
            <button
              className="btnDelete"
              variant="primary"
              onClick={excluirAgendamentos}
            >
              <FaTrashAlt /> Deletar
            </button>
          </div>
        </div>
        <div className="r2Tab row">
          <div className="colTab1 col-sm">
            <div className="containerGrid">
            <Table size="sm" className="tabela" striped hover responsive="sm">
              <thead>
                <tr>
                  <th></th>
                  <th className="text-center">id</th>
                  <th className="text-center">Cliente</th>
                  <th className="text-center">Dia</th>
                  <th className="text-center">Hora</th>
                  <th className="text-center" style={{ width: "20%" }}>
                    Status
                  </th>
                  <th className="text-center">Serviço</th>
                  <th className="text-center">Funcionário</th>
                </tr>
              </thead>
              {currentIndex.map((item) => (
                <tbody className="linha" key={item.id}>
                  <tr>
                    <td className="check">
                      <Form.Check
                        checked={verMarcado(item.id)}
                        onChange={() => {
                          marcar(item.id);
                        }}
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                        }}
                      />
                    </td>
                    <td className="text-center">{item.id}</td>
                    <td className="text-center">{item.cliente.nome}</td>
                    <td className="text-center">{item.dia}</td>
                    <td className="text-center">{item.hora}</td>
                    <td>
                      <select
                        className="caixa form-select"
                        value={item.status}
                        onChange={(e) => alteraStatus(e, item)}
                      >
                        <option className="boxselect" value="1">
                          Aberto
                        </option>
                        <option className="boxselect" value="2">
                          Finalizado
                        </option>
                        <option className="boxselect" value="3">
                          Cancelado
                        </option>
                      </select>
                    </td>
                    <td className="text-center">{item.servico.nome}</td>
                    <td className="text-center">{item.funcionario.nome}</td>
                    <td>
                      {" "}
                      <button
                        className="deleteUm"
                        onClick={() => {
                          excluirUmAgendamento(item);
                        }}
                      >
                        <FaTrashAlt size={20} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
            </div>  
          </div>
        </div>
        <div className="r3Tab row">
          <div className="colTab2 col-sm me-2">
           
            {Array.from(Array(pages), (agendamentos, index) => {
              return (
                <button
                  key={index}
                  className="numberPage"
                  value={index}
                  onClick={(e) => {
                    setCurrentPage(Number(e.target.value));
                  }}
                  style={
                    index === currentPage ? { backgroundColor: "gray" } : null
                  }
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default TabelaDados;
