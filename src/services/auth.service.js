import axios from "axios";

const API_URL = "http://localhost:8000/api/";
const config = {
  headers: {
    'Content-Type':'application/json',
    'Accept':'application/json',
    "Access-Control-Allow-Origin": "*",
  },
};

class AuthService {

  login(username, password) {
    return axios
      .post(API_URL + "login_check", { username, password }, config)
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
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