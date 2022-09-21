import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ccb.moongo.com.br/api/v1'
});

export { api };