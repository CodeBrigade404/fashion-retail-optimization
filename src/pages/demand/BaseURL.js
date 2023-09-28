import axios from "axios";

const demandAxios = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export default demandAxios;
