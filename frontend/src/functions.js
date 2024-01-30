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
  const response = await axios.post(`${URL}/data`, operation);
};
