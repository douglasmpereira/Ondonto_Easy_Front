import api from '../api';

export const getCliente = () => {
  return api.get(`/cliente`).then((response) => response.data);
};

export const getByIdCliente = (id) => {
  return api.get(`/cliente/${id}`).then((response) => response.data);
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
  return api.put(`/cliente/${id}`).then((response) => response.data);
};

export const deleteCliente = (id) => {
  return api.delete(`/cliente/${id}`).then((response) => response.data);
};