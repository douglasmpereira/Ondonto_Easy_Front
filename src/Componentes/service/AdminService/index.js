import api from '../api';

export const getAdmin = () => {
  return api.get(`/admin`).then((response) => response.data);
};

export const getByIdAdmin = (id) => {
  return api.get(`/admin/${id}`).then((response) => response.data);
};

export const postAdmin = (user) => {
  return api
    .post(`/admin`, user)
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    });
};

export const putAdmin = (id) => {
  return api.put(`/admin/${id}`).then((response) => response.data);
};

export const deleteAdmin = (id) => {
  return api.delete(`/admin/${id}`).then((response) => response.data);
};
