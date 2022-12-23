import React from "react";

const User = ({ user }) => {
  return (
    <div className="container">
      <p className="names">{` ${user.name.first} ${user.name.last}`}</p>
      <p className="names"> {` ${user.phone}`} </p>
        <p className="names"> {` ${user.email}`} </p>
        <p className="names"> {` ${user.location.city}`} </p>
        <p className="names"> {` ${user.location.state}`} </p>
        
        
    </div>
  );
};

export default User;
