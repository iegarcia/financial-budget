import axios from "axios";

const URL = "http://localhost:3000";

export const getData = async () => {
  const response = await axios.get(`${URL}/data`);
  return response.data;
};

export const getCurrentBalance = async () => {
  const response = await axios.get(URL);
  return response.data;
};

export const addOperation = async (operation) => {
  const response = await axios.post(`${URL}/data/add`, operation);
  return response.data;
};

export const updateOperation = async (operation) => {
  const response = await axios.post(`${URL}/data/edit`, operation);
  return response.data;
};
export const deleteOperation = async (id) => {
  const response = await axios.delete(`${URL}/data/${id}`);
  return response.data;
};
