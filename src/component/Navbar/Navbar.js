import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie, getCookieValue } from "../Cookie/Cookie";
import "./Navbar.css";

function Navbar() {
  let navname = "login";
  let navhref = "/login";

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
    },
  ]);

  // set currentUser
  let getCurrentUser = (currentUserID) => {
    if (currentUserID == "") {
      return {
        _id: Object,
        userName: "",
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
    };
  };
  let userFind = getCurrentUser(getCookieValue("currentUserID"));

  //  console.log('userFind',userFind);
  const [currentUser, setCurrentUser] = useState(userFind);
  //console.log('currentUser',currentUser);
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
        //console.log("res",res);
      });
    console.log(loginType);

    setCookie("loginType", parseInt(loginType), "", "");
    if (parseInt(loginType) == 0) {
      setCookie("currentUserID", "", "", "");
    } else if (parseInt(loginType) == 1) {
      setCurrentUser(userFind);
    }
    console.log("userFind", userFind);
  }, [loginType]);

  let signOut = (e) => {
    //setCookie("loginType", 0, "", "");
    setLoginType(0);
  };

  if (loginType == 0) {
    navname = "login";
    navhref = "/login";
  } else if (loginType == 1) {
    navname = userFind.userName;
    navhref = "/profile";
  }

  const loginDropdown = (navname) => {
    return (
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false"
        >
          {navname}
        </a>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              MyZone
            </a>
          </li>
          <li>
            <hr class="dropdown-divider"></hr>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Log Out
            </a>
          </li>
        </ul>
      </li>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <path d="m17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56h-13.334c-1.51-.036-2.769-.556-3.773-1.56s-1.524-2.262-1.56-3.773v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1 -.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373s.653.124.92.373l2.853 2.747c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373s.662.151.929.4.391.551.391.907c0 .355-.124.657-.373.906zm-12.48 2.587c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zm2.667 3.867c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96v-1.173c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96v-1.173c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z" />
          </svg>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                HOME
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/login" onClick={signOut}>
                {navname}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin">
                Admin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
