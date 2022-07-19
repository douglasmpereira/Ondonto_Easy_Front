import api from '../api';

export const getAgendamento = () => {
  return api.get(`/agendamento`).then((response) => response.data);
};

export const getByIdAgendamento = (id) => {
  return api.get(`/agendamento/${id}`).then((response) => response.data);
};

export const postAgendamento = (user) => {
  return api
    .post(`/agendamento`, user)
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    });
};

export const putAgendamento = (id) => {
  return api.put(`/agendamento/${id}`).then((response) => response.data);
};

export const deleteAgendamento = (id) => {
  return api.delete(`/agendamento/${id}`).then((response) => response.data);
};
