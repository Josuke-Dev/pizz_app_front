import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://localhost:8000/api/orders/';
const API_URL2 = 'https://pokeapi.co/api/v2/machine/2/';

const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTYwMDQ2OTEsImV4cCI6MTY1NjAwODI5MSwicm9sZXMiOlsiUk9MRV9DVVNUT01FUiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InBlcnJpZXIudGhvbWFzQHNmci5mciJ9.jmx5gQLjZ2fH3YFTswrkrk6RGtvvm2LnFBjgOW0VkvwvbL62Z1ovyayMQW_cFp_F8B8tR5o_9iJELfbZ7C1tjUdGYpotySXv3Q92ugzksV6sQt_rk-lPxGxzwZ6W91Uva1qURjzE5p04a_TQ6Y74e0yWNi5KHDOHDTh-bNMFtOG4wNYAPe1VhtALzx0_MPS_7IFGRho_ORVqvfrWyA7nosUM8bGIgS9xpmRHdUGiLa27_vue2f3sby9bgfRU55Dv35Z9RdXl9HDDw4bjBpoR3GtAzy8V-gE0h7AFPvYWB8al3wedTFpEN0ltVVasyWymDepf5wtsbR8WGeY86fi1Mg";
const config = {
  headers: {
    'accept':'application/json',
    'Authorization': `Bearer ${token}`,
    'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type',
    'Access-Control-Allow-Methods':'POST, GET',

  },
};


class UserService {


  getAll() {
    return axios.get(API_URL + 'all');
  }

 /* getUser() {
    return axios.get(API_URL + 'login_check', { headers: authHeader() });
  }*/
//https://pokeapi.co/api/v2/machine/2/
  getPokemon() {
    return axios.get(API_URL2,  config ).then((response) => console.log(response));
  }
  getOrders() {
    return axios.get(API_URL ,  config ).then((response) => console.log(response));
  }

}

export default new UserService();