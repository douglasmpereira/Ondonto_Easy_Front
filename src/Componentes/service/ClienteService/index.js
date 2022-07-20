import api from '../api';

export const getCliente = () => {
  return api.get(`/cliente`).then((response) => response.data);
};

export const getbyEmailCliente = (email) => {
  return api.get(`/cliente/email=${email}`).then((response) => response.data);
};

export const getByIdCliente = (id) => {
  return api.get(`/cliente/id=${id}`).then((response) => response.data);
};

export const getByCpfCliente = (cpf) => {
  return api.get(`/cliente/cpf=${cpf}`).then((response) => response.data);
};

export const postCliente = (user) => {
  return api
    .post(`/cliente`, user)
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    });
};

export const putCliente = (id) => {
  return api.put(`/cliente/id=${id}`).then((response) => response.data);
};

export const deleteCliente = (id) => {
  return api.delete(`/usuario/id=${id}`).then((response) => response.data);
};