import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/api/';
const config = {
  headers: {
    'accept':'application/json'
  },
};

class UserService {


  getAll() {
    return axios.get(API_URL + 'all');
  }

  getUser() {
    return axios.get(API_URL + 'login_check', { headers: authHeader() });
  }

  getOrders() {
    return axios.get(API_URL + 'orders',  config ).then((response) => console.log(response));
  }

}

export default new UserService();