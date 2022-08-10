import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Outlet, IndexRoute, Routes, Route, Link } from 'react-router-dom'
import { setCookie, getCookieValue } from "../Cookie/Cookie";
import "./Zone.css"
function MyZoneBar() {
  let loginCookie = getCookieValue("loginType");
  const [loginType, setLoginType] = useState(
    loginCookie === null ? 0 : parseInt(loginCookie)
  );
  if (loginCookie === null) {
    loginCookie = setCookie("loginType", 0, "", "");
  }
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
    for (let i = 0; i < users.length; i++) {
      if (users[i]._id == currentUserID) {
        return users[i];
      }
    }
    return {
      _id: Object,
      userName: "",
    };
  };
  let userFind = getCurrentUser(getCookieValue("currentUserID"));


  const [currentUser, setCurrentUser] = useState(userFind);

  useEffect(() => {
    fetch("http://localhost:3001/users/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        setUsers(res);

      });
    // console.log(loginType);

    setCookie("loginType", parseInt(loginType), "", "");
    if (parseInt(loginType) == 0) {
      setCookie("currentUserID", "", "", "");
    } else if (parseInt(loginType) == 1) {
      setCurrentUser(userFind);
    }

  }, [loginType]);

  //console.log("userFind", userFind);


  let subscribe = 0;
  let fans = 0;
  if (userFind.following) {
    subscribe = userFind.following.length;
    //console.log(loginType);
    fans = userFind.follower.length;
  }


  return (
    <div class="col-12 row rounded" id="zoneBarOut">
      <div  id="zoneBarImg">

      </div>
      <div class="col-12 row" id="zoneBarText">
        <span id="linkZoneSpanOut">
          <span id="linkZoneSpan">
          <a href="/myzone" id="linkZone">My Zone</a>
          </span>
          <span id="zoneBarSub">
            {/* <span id="zoneBarTitle">MyZoneBar   </span> */}

            <span >subscribe:</span>
            {subscribe}
            <span >fans:</span>
            {fans}
          </span>
        </span>
      </div>
    </div>
  )
}

export default MyZoneBar