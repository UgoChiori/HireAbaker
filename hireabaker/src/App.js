import React from "react";
import { Routes, Route } from "react-router-dom";
import Features from "./Components/Features";
import About from "./Components/About";
import Baker from "./Components/Baker";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Navbar from "./Navbar";
import Hamburgermenu from "./Hamburgermenu";
import { UserAuthContextProvider } from "./Components/Context/UserAuthContext";


function App() {
  return (
    <div className="App">
      <div className="stop-scrolling">
        <main>
          <div className="big-wrapper light">
            <img src={require("./shape.png")} alt="shape" className="shape" />
            <header>
              <div className="container">
                <div className="logo">
                  <img src={require("./logo.png")} alt="logo" />
                  <h3>Hire-A-Baker</h3>
                  <Navbar />
                  <ul>
                    <UserAuthContextProvider>
                      <Routes>
                        <Route path="/" element={<Features />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/baker" element={<Baker />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                      </Routes>
                    </UserAuthContextProvider>
                  </ul>
                  <Hamburgermenu />
                </div>
              </div>
            </header>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
