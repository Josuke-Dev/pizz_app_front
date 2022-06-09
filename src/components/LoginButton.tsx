import React from "react";
import './LogButton.css';

const LoginButton = () => {

  return (
    <button className="login-btn" onClick={() => { window.location.href="/login" }}>
      Connexion - Inscription
    </button>
  );
  
};

export default LoginButton;