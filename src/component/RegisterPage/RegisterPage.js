import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../LoginPage/LoginPage.css";
import axios from "axios";
import swal from "sweetalert";

function RegisterPage() {
  const navigate = useNavigate();

  var valEmail = /([\w.]+)@([\w.]+)\.(\w+)/;
  var valPwd =
    /^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?\(\)]).*$/;

  const [input, setInput] = useState({
    email: "",
    password: "",
    gender: "",
    userName: "",
    DOB: "",
    repeatpassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    console.log(input);
    let users = fetch("http://localhost:3001/users/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((users) => {
        let flag = true;
        users.find((item) => {
          if (item.userName == input.userName) {
            flag = false;
          }
        });
        if (!flag) {
          swal({
            title: "Oh No!",
            text: "Username is duplicated!\n" + "Please change to another one.",
            icon: "error",
          });
          return false;
        }
        if (!input.email.match(valEmail)) {
          swal({
            title: "Oh No!",
            text: "Invalid Email!",
            icon: "error",
          });
        } else if (!input.password.match(valPwd)) {
          swal({
            title: "Oh No!",
            text:
              "Invalid Password!\n" +
              "At least 8 digits\n" +
              "Must contain 1 number\n" +
              "Must contain 1 lowercase letters\n" +
              "Must contain 1 uppercase letters\n" +
              "Must contain 1 special character\n",
            icon: "error",
          });
        } else if (input.password !== input.repeatpassword) {
          swal({
            title: "Oh No!",
            text: "Repeat Password is not same as password!",
            icon: "warning",
          });
        } else {
          const newEntrance = {
            gender: input.gender.value,
            userName: input.userName,
            password: input.password,
            email: input.email,
            DOB: input.DOB,
          };
          axios.post("http://localhost:3001/users/create", newEntrance);
          swal({
            title: "Thanks!",
            text: "Welcome to dilidili!",
            icon: "success",
          });
          return navigate("/");
        }
      });
    // alert(input.advatarsValue.state.value.value)
  }

  return (
    <div className="login-wrapper">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <div className="container">
              <div className="row pannel">
                <div className="d-none d-md-block col-md-3 col-lg-3 col-xl-3 icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56h-13.334c-1.51-.036-2.769-.556-3.773-1.56s-1.524-2.262-1.56-3.773v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1 -.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373s.653.124.92.373l2.853 2.747c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373s.662.151.929.4.391.551.391.907c0 .355-.124.657-.373.906zm-12.48 2.587c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zm2.667 3.867c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96v-1.173c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96v-1.173c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z" />
                  </svg>
                </div>
                <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 login-pannel">
                  <div className="align-middle">
                    <div className="container">
                      <div className="row d-flex justify-content-center">
                        <div className="col-2" id="login-alt">
                          <a href="/login">LOGIN</a>
                        </div>
                        <div className="col-1">
                          <p>|</p>
                        </div>
                        <div className="col-2" id="register-alt">
                          <a href="/register">REGISTER</a>
                        </div>
                      </div>
                    </div>
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputUsername"
                          className="form-label"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputUsername"
                          aria-describedby="emailHelp"
                          name="userName"
                          value={input.userName}
                          onChange={handleChange}
                          required
                        ></input>
                      </div>
                      <div className="mb-3">
                        <div>
                          <label
                            htmlFor="exampleInputName1"
                            className="form-label"
                          >
                            Gender:
                          </label>
                          <select
                            name="gender"
                            ref={(x) => (input.gender = x)}
                            className="form-control input-lg"
                            placeholder="Gender"
                            id="exampleSelectGender"
                          >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label for="date-picker-example" className="form-label">
                          Date of Birth
                        </label>
                        <div
                          id="date-picker-example"
                          class="md-form md-outline input-with-post-icon datepicker"
                          inline="true"
                        >
                          <input
                            placeholder="Select date"
                            type="date"
                            id="example"
                            class="form-control"
                            name="DOB"
                            value={input.DOB}
                            onChange={handleChange}
                          />

                          <i class="fas fa-calendar input-prefix"></i>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="email"
                          value={input.email}
                          onChange={handleChange}
                          required
                        ></input>
                        <div id="emailHelp" className="form-text">
                          We'll never share your email with anyone else.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          name="password"
                          value={input.password}
                          onChange={handleChange}
                          required
                        ></input>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Password Confirm
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          name="repeatpassword"
                          value={input.repeatpassword}
                          onChange={handleChange}
                          required
                        ></input>
                      </div>
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          Remember me
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleClick}
                      >
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
