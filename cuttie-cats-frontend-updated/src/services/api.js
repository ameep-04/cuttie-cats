
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8085/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCats = async () => {
  const response = await api.get("/cats");
  return response.data;
};

export const getCatById = async (id) => {
  const response = await api.get(`/cats/${id}`);
  return response.data;
};

export const submitEnquiry = async (enquiry) => {
  const response = await api.post("/enquiries", enquiry);
  return response.data;
};

export default api;
