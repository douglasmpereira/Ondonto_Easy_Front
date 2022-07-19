import api from '../api';

export const getServico = () => {
  return api.get(`/servico`).then((response) => response.data);
};

export const getByIdServico = (id) => {
  return api.get(`/servico/${id}`).then((response) => response.data);
};

export const postServico = (user) => {
  return api
    .post(`/servico`, user)
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    });
};

export const putServico = (id) => {
  return api.put(`/servico/${id}`).then((response) => response.data);
};

export const deleteServico = (id) => {
  return api.delete(`/servico/${id}`).then((response) => response.data);
};
