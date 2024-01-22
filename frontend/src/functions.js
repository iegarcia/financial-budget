import axios from "axios";

export const getData = async () => {
  const response = await axios.get("http://localhost:3000/data");
  return response.data;
};
