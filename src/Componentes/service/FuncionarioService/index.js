import api from '../api';

export const getFuncionario = () => {
  return api.get(`/funcionario`).then((response) => response.data);
};

export const getByIdFuncionario = (id) => {
  return api.get(`/funcionario/${id}`).then((response) => response.data);
};

export const postFuncionario = (user) => {
  return api
    .post(`/funcionario`, user)
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    });
};

export const putFuncionario = (id) => {
  return api.put(`/funcionario/${id}`).then((response) => response.data);
};

export const deleteFuncionario = (id) => {
  return api.delete(`/funcionario/${id}`).then((response) => response.data);
};
