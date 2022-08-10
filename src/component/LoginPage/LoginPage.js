import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { setCookie, getCookieValue } from "../Cookie/Cookie";
import swal from "sweetalert";

function LoginPage() {
  let loginCookie = getCookieValue("loginType");
  // console.log("loginCookie",loginCookie);
  const [loginType, setLoginType] = useState(
    loginCookie === null ? 0 : parseInt(loginCookie)
  );
  if (loginCookie === null) {
    loginCookie = setCookie("loginType", 0, "", "");
  }
  //console.log("loginType",loginType);
  const [users, setUsers] = useState([
    {
      _id: Object,
      userName: "",
      password: "",
    },
  ]);

  const [flag,setFlag] = useState(false);

  // set currentUser
  let getCurrentUser = (currentUserID) => {
    if (currentUserID == "") {
      return {
        _id: Object,
        userName: "",
        password: "",
      };
    }
    // these code will cause re-peat wrong
    // let userSave = users.find((item) => {
    //     if (item._id == currentUserID) {
    //         setInfoUserName(item.userName);
    //         setInfoUserPwd(item.password);
    //         return item;
    //     }
    // });
    // console.log('userSave',userSave);
    for (let i = 0; i < users.length; i++) {
      if (users[i]._id == currentUserID) {
        // setInfoUserName(users[i].userName);
        // setInfoUserPwd(users[i].password);

        return users[i];
      }
    }
    return {
      _id: Object,
      userName: "",
      password: "",
    };
  };
  let userFind = getCurrentUser(getCookieValue("currentUserID"));

  // console.log('userFind',userFind);
  const [currentUser, setCurrentUser] = useState(userFind);
  //

  useEffect(() => {
    fetch("http://localhost:3001/users/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        setUsers(res);
        //  console.log("res",res);
      });

    setCookie("loginType", parseInt(loginType), "", "");
    if (parseInt(loginType) == 0) {
      setCookie("currentUserID", "", "", "");
    } else if (parseInt(loginType) == 1) {
      setCurrentUser(userFind);
    }
    console.log("users", users);
  }, [loginType]);

  const [InfoUserName, setInfoUserName] = useState(currentUser.userName);
  const [InfoUserPwd, setInfoUserPwd] = useState(currentUser.password);
  let inputUserNameChange = (e) => {
    setInfoUserName(e.target.value);
    console.log("UserName Input", e.target.value);
  };

  let inputUserPwdChange = (e) => {
    setInfoUserPwd(e.target.value);
    console.log("Pwd Input", e.target.value);
  };
  //console.log(users);

  // let imgUser = "";

  let login = (e) => {
    e.preventDefault();
    let flage = false;
    users.find((item) => {
      if (item.userName == InfoUserName) {
        let userfindbyname = fetch("http://localhost:3001/users/login", {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            password: InfoUserPwd,
            result: item,
          }),
        }).then((res) => {
          console.log(res.status);
          if (res.status == 200) {
            setCookie("currentUserID", item._id, "", "");
            setLoginType(1);
            flage=true;
            swal({
              title: "Login success",
              text: "Going to the main page...",
              icon: "success",
            });
            window.location = "/";
            console.log("login success");
          }  else {
            console.log("login fail");
            swal({
              title: "Oh No!",
              text: "Wrong User Name or Password!",
              icon: "error",
            });
          } 
        });
        //setCookie("loginType", 1, "", "");
      }
      console.log(flag);
      if (flage ==false) {
      if(InfoUserName=="admin"&&InfoUserPwd=="admin"){
        window.location = "/admin";
      }else{
        console.log("flag==false")
            swal({
                title: "Oh No!",
                text: "Wrong User Name or Password!",
                icon: "error",
              });
            }
        } 
    });
    /* console.log(flag);
      if (flag ==false) {
      if(InfoUserName=="admin"&&InfoUserPwd=="admin"){
        window.location = "/admin";
      }else{
            swal({
                title: "Oh No!",
                text: "Wrong User Name or Password!",
                icon: "error",
              });
            }
        }  */
  };

  let path = `/userinfo/${userFind.userName}`;
  // console.log('currentUser',currentUser);

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
                          value={InfoUserName}
                          onChange={inputUserNameChange}
                          required
                        ></input>
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
                          value={InfoUserPwd}
                          onChange={inputUserPwdChange}
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
                        onClick={login}
                      >
                        Login
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

export default LoginPage;
