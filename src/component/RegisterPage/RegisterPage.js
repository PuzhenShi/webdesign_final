import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import swal from 'sweetalert';

import "./RegisterPage.css";

function RegisterPage() {

  const navigate = useNavigate();

  var valEmail = /([\w.]+)@([\w.]+)\.(\w+)/;
  var valPwd = /^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?\(\)]).*$/;

  const [input, setInput] =useState({
      email:'',
      password:'',
      gender: '',
      userName:'',
      DOB:'',
      repeatpassword:''
  });

  function handleChange(event){
      const{name,value} = event.target;
  
      setInput(prevInput => {
          return {
              ...prevInput,
              [name]:value

          }
      })

  }

  function handleClick(event){
      event.preventDefault();
       console.log(input);
      let users = fetch("http://localhost:3001/users/users")
      .then(res => {
          if (res.ok) {
              return res.json()
          }
      }).then(users => {
          let flag = true;
          users.find((item) => {
              if (item.userName == input.userName) {
                  flag = false;
              }
          });
          if (!flag) {
              swal({
                  title: "Oh No!",
                  text: "Username is duplicated!\n" + 
                          "Please change to another one.",
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
                          text: "Invalid Password!\n" +
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
              const newEntrance={
                  gender: input.gender.value,
                  userName:input.userName,
                  password:input.password,
                  email:input.email,
                  DOB:input.DOB
              };
              axios.post('http://localhost:3001/users/create',newEntrance);
              swal({
                  title: "Thanks!",
                  text: "Welcome to dilidili!",
                  icon: "success",
                });
              return (
                navigate('/')
              )
          }
      });
      // alert(input.advatarsValue.state.value.value)
  }



  return (
    <div className="wrapper container">
      <div className="row d-flex justify-content-center login">
        <div className="col-md-12 col-md-10 col-lg-8 col-xl-6 column">
          <div className="pannel align-middle">
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
                <label htmlFor="exampleInputUsername" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputUsername"
                  aria-describedby="emailHelp"
                  name= "userName"
                  value = {input.userName}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="mb-3">
              <div>
                    <label htmlFor="exampleInputName1"className='form-label'>Gender:</label>
                    <select name= "gender" ref={(x) => input.gender = x} className="form-control input-lg"  placeholder="Gender" id="exampleSelectGender" >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
                </div>
              </div>
              <div className="mb-3">
              <label for="date-picker-example" className='form-label'>Date of Birth</label>
                <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
                <input placeholder="Select date" type="date" id="example" class="form-control" name="DOB" value={input.DOB} onChange={handleChange}/>
                
                <i class="fas fa-calendar input-prefix"></i>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={input.email} onChange={handleChange}
                  required
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
                  name="password"
                  value={input.password} onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password Confirm
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="repeatpassword"
                  value={input.repeatpassword} onChange={handleChange}
                  required
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
              <button type="submit" className="btn btn-primary"onClick={handleClick}>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
