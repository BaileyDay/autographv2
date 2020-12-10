import React from "react";
import NavBar from './navbar'
import "../css/login.css"

const Login = () => {
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
              <label htmlFor="" className="label">Email</label>
              <div className="control has-icons-left">
                <input type="email" placeholder="hello@example.com" className="input" required />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="" className="label">Password</label>
              <div className="control has-icons-left">
                <input type="password" placeholder="*******" className="input" required />
                <span className="icon is-small is-left">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div className="field">

            </div>
            <div className="field">
              <button className="button ">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
};

export default Login;