import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./Profile.css";

const Profile: React.FC | any = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        { (user != undefined) ?
        <div className="profile-block">
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
        : null }
      </div>
    )
  );
};

export default Profile;