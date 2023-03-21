import React, { Component, useState } from "react";
import loginimg from "./wmwelogo.png";
import "./Login.css";
import "./Home.css";
//import logingoogle from "./googleLogin.png";
// export default class Login extends Component {

import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn, forgotPassword } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/Account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const handleForgot = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await forgotPassword(email);
      navigate("/Login");
      console.log("sent");
      console.log(email);
    } catch (e) {
      console.log("forgot");
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className="login">
        <div className="banner1">
          <h3 className="banner-text">
            Mentee applications for Fall 2022 are now open!
          </h3>
          <h3 className="banner-text">apply today</h3>
        </div>

        <div style={{ padding: "20px" }}>
          <img src={loginimg} style={{ maxWidth: "80px" }}></img>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <h3 className="text-login">email</h3>
            <input
              className="login-textinput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
            />
          </div>

          <div>
            <h3 className="text-login">password</h3>
            <input
              className="login-textinput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
            />
          </div>

          <div style={{ padding: "30px" }}>
            <button
              onclick={console.log("you have clicked the button")}
              className="button-login"
            >
              <div className="button-flex">log in</div>
            </button>
          </div>
        </form>

        <h3
          className="extratext-login"
          onClick={() => {
            navigate("/forgot");
          }}
        >
          forgot password?
        </h3>
      </div>
    </div>
  );
};

export default Login;
