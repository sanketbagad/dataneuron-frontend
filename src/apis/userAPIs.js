import axios from "axios";

const url = "http://localhost:8000/api/users";

export const getUsers = async () => {
  return await axios.get(url);
};

export const addUser = async (user) => {
  return await axios.post(url, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

export const updateUser = async (id, user) => {
  return await axios.put(`${url}/${id}`, user);
};