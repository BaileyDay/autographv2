import React, { useState } from "react";
import NavBar from './navbar'
import "../css/login.css"
import { useHistory } from "react-router-dom";
import { useStore } from "./store";
import axios from "axios";
import { STATES } from "mongoose";

const Login = () => {
  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState(0);
  const { state, dispatch } = useStore();
  let history = useHistory();
  
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/api/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          dispatch({ type: "loginSucceeded", payload: response.data });
        }
      })
      .then(() => {
        history.push("/dashboard");
      })
      .catch(function (error) {
        console.log(error.response.status);
        if (error.response.status === 400) {
          dispatch({ type: "InvalidUsername" });
        }
      });
  }

  return (
    <>
    <NavBar/>
    <section className="hero  is-light is-fullheight">
  <div className="hero-body">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" className="box login">
              <img src="https://autographfarm.s3.us-east-2.amazonaws.com/logo.png" alt=""/>
            <div className="field">
              <label htmlFor="" className="label">Username</label>
              <div className="control has-icons-left">
                <input type="email" placeholder="Username" className="input" required onChange={(e) => setUsername(e.target.value)}/>
                <span className="icon is-small is-left">
                  <i className="fa fa-user"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="" className="label">Password</label>
              <div className="control has-icons-left">
                <input type="password" placeholder="*******" className="input" required onChange={(e) => setPassword(e.target.value)}/>
                <span className="icon is-small is-left">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div className="field">

            </div>
            <div className="field">
              <button className="button" onClick={handleLogin}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {state.errorMessage &&
  <div className="notification is-danger is-light m-5">
  {state.errorMessage}
</div>}
</section>

</>
  );
};

export default Login;