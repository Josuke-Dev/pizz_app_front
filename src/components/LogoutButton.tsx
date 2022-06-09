import React from "react";
import './LogButton.css';

const LogoutButton = () => {

  return (
    <button className="logout-btn" onClick={() => { window.location.origin }}>
      Déconnexion
    </button>
  );
};

export default LogoutButton;