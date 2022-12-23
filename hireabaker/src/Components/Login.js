import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form, Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./Context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3"> Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)} 
             />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap2">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="google-btn"
            type="dark"
            // onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Signup</Link>
      </div>
    </>
  );
};

export default Login;

// import React, { useState } from "react";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [showProfile, setShowProfile] = useState(false);
//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter your username"
//         onChange={(e) => {
//           setUsername(e.target.value);
//         }}
//       />
//       <input type="text" placeholder="Password" />
//       <button
//         onClick={() => {
//           setShowProfile(true);
//         }}
//       >
//         Login
//       </button>
//       {showProfile && <h2>Hello, {username}</h2>}
//     </>
//   );
// }

// export default Login;
