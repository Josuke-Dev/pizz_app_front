import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './LogButton.css';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="logout-btn" onClick={() => logout({ returnTo: window.location.origin })}>
      Déconnexion
    </button>
  );
};

export default LogoutButton;