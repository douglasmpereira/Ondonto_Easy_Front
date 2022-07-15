import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './modal.css';


function ModalMenu({salvarAgendamento}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    
    <>
    
      <Button variant="primary" onClick={handleShow}>
       MODAL
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='title-modal'>Agendamento</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-teste'>

        <input className="inputAdmin" type="text" placeholder="Nome " required />
            <input className="inputAdmin" type="text" placeholder="CPF " required />
            <input className="inputAdmin" type="text" placeholder="Telefone " required />
            <input className="inputAdmin" type="text" placeholder="Idade" required />
         

        <select
              className="" required>
              <option className = "boxselect" value="0" disabled selected>Serviço</option>
              <option className = "boxselect"  value="1">Manutenção de Aparelho</option>
              <option className = "boxselect"  value="2">Canal</option>
              <option className = "boxselect"  value="3">Limpeza</option>
              <option className = "boxselect"  value="4">Removação de dente</option>
            </select>
            <select
              className="">
              <option className = "boxselect" value="0" disabled selected>Data</option>
              <option className = "boxselect"  value="1">CALENDARIO AQUI?</option>
           
            </select>
            <select
              className="">
              <option className = "boxselect" value="0" disabled selected>Hora</option>
              <option className = "boxselect"  value="1">19:59</option>
             
            </select>

            <select
              className="">
              <option className = "boxselect" value="0" disabled selected>Preço</option>
              
              
            </select>
           
          
        </Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Observação:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                 </Form.Group>
        <Modal.Footer>
          <Button variant="secondary" className='btn-cancelar' onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" type='button' className='btn-modal' onClick={salvarAgendamento}>Salvar</Button>
        </Modal.Footer>
   
      </Modal>
    </>
  );
}
export default ModalMenu;
