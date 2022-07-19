import api from '../api';

export const getCargo = () => {
  return api.get(`/cargo`).then((response) => response.data);
};

export const getByIdCargo = (id) => {
  return api.get(`/cargo/${id}`).then((response) => response.data);
};

export const postCargo = (user) => {
  return api
    .post(`/cargo`, user)
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    });
};

export const putCargo = (id) => {
  return api.put(`/cargo/${id}`).then((response) => response.data);
};

export const deleteCargo = (id) => {
  return api.delete(`/cargo/${id}`).then((response) => response.data);
};
