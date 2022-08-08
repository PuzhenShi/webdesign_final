import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="wrapper container">
      <div className="row d-flex justify-content-center login">
        <div className="col-md-12 col-md-10 col-lg-8 col-xl-6 column">
          <div className="pannel align-middle">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-2" id="login">
                  <a href="/login">LOGIN</a>
                </div>
                <div className="col-1">
                  <p>|</p>
                </div>
                <div className="col-2" id="register">
                  <a href="/register">REGISTER</a>
                </div>
              </div>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                ></input>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                ></input>
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
