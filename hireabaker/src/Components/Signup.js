import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./Context/UserAuthContext";
// import UserAuthContext from "./Context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">FireBase Auth Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
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
              Signup
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/login">Sign Up</Link>
      </div>
    </>
  );
};

export default Signup;

// import React, { useState } from "react";

// function Signup() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");

//   return (
//     <>
//     <input type="text" placeholder="First name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
//     <input type="text" placeholder="Last name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
//       <input
//         type="text"
//         placeholder="Enter your username"
//         onChange={(e) => {
//           setUsername(e.target.value);
//         }}
//       />
//       <input
//         type="text"
//         placeholder="Enter your password"
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
//       <input
//         type="text"
//         placeholder="Enter your email"
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//       <input type="number" placeholder="Enter your phone number" required />
//       <button>Signup</button>
//       {username && <h2>Hello, {firstname} {lastname}  </h2>}

//     </>
//   );
// }

// export default Signup;
