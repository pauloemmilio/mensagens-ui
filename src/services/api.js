import axios from 'axios';

const api = axios.create({baseURL: 'https://mensagens-api.herokuapp.com/'});

export default api;