import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './LogButton.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="login-btn" onClick={() => loginWithRedirect()}>
      Connexion - Inscription
    </button>
  );
  
};

export default LoginButton;