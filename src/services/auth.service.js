import axios from "axios";

const API_URL = "https://localhost:8000/api/login_check";
const config = {
  headers: {
    'Content-Type':'application/json',
    'Accept':'application/json',
   ' Access-Control-Allow-Origin': '*',

  },
};

class AuthService {

  async login(username, password) {



    const userObject = {
      'username': username,
      'password': password
    };
    console.log(userObject);
    try {
      const response = await axios.post(API_URL,  userObject,  {
        headers: {
          'Content-Type': 'application/json',

          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'X-Requested-With': 'XMLHttpRequest' // type de requete



        }});

      console.log(response.data);
    } catch (error) {
        console.log(error)
    }


    /*return axios
      .post(API_URL + "login_check", { username, password }, config)
      .then((response) => {
        console.log('login2');
        console.log(response);
      if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });*/
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, password) {
    return axios.post(API_URL + "login_check", {
      username,
      password,
    });
  }

}

export default new AuthService();