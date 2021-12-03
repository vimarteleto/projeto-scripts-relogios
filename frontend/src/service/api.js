import axios from 'axios';

const urlApi = axios.create({
  baseURL: 'http://localhost:3001',
})

export default urlApi;

