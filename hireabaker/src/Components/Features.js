import React from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "./Context/UserAuthContext";

const Features = () => {
  const { user, logOut } = useUserAuth();
  console.log(user);
  const handleLogOut = async () => {
    try {
  await logOut();
    }catch(err) {
console.log(err)
    } 
  };

  return (
    <div className="showcase-area">
      <div className="right">
        <img
          className="person"
          src={require("./girlcake.jpeg")}
          alt="girl with cupcake"
        /> 
      </div>
      <div className="p-4 box mt-3 text-center">
        Hello, Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" className="btn" onClick={handleLogOut} >
          LOG OUT
        </Button>
      </div>
      <div className="bottom-area">
        <div className="container">
          <button className="toggle-btn">
            <i className="far fa-moon"></i>
            <i className="far fa-sun"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
