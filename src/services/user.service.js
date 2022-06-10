import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/test/';

class UserService {

  getAll() {
    return axios.get(API_URL + 'all');
  }

  getUser() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getOrders() {
    return axios.get(API_URL + 'orders').then((response) => console.log(response));
  }

}

export default new UserService();