import React from "react";
import { Link } from "react-router-dom";



function Navbar() {
    return(
        <div className="links">
        {/* <Link to="/">Home</Link> */}
        <Link to="/">Features</Link>
        <Link to="/about">About</Link>
        <Link to="/baker">Bakers</Link>
        <Link className="btn" to="/signup">Sign Up</Link>
        <Link className="btn" to="/login">Login</Link>
    </div>
    )
}


export default Navbar