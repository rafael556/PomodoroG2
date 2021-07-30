import axios from "axios";

// mudar baseURL
const api = axios.create({
  baseURL: "http://localhost:3000"
});

export default api;