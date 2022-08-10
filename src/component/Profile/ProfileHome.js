import React, { useState, useEffect } from "react";
import { setCookie, getCookieValue } from "../Cookie/Cookie";

function ProfileHome() {
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
  const imgsrc = userFind.portrait;
  console.log(imgsrc);
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

  console.log(userFind);
  let a = 0;
  let b = 0;
  if (userFind.following) {
    a = userFind.following.length;
    b = userFind.follower.length;
  }


  return (
    <div class="col-8 ml-8 mb-8 rounded">
      {/* the right panel of profile home, display the basic info of this user but can't edit */}
      <div id="profileHomePanel" class="profilePanel">

        <p>user name:</p>
        {/* post username here */}
        <div id="profileHomeName"><label>{userFind.userName}</label></div>
        <p>user sign:</p>
        {/* post user sign here */}
        <div id="profileHomeSign"><label>{userFind.motto}</label></div>
        {/* the number of subscribed publishers and fans */}
        <p>user email</p>
        <div id="profileHomeEmail"><label>{userFind.email}</label></div>
        <p>user gender</p>
        <div id="profileHomeEmail"><label>{userFind.gender}</label></div>
        <p>subscribe:</p>
        <div id="profileHomeSub"><label>{a}</label></div>
        <p>fans:</p>
        <div id="profileHomeFan"><label>{b}</label></div>
        <p>img</p>
        {/* <img src={imgsrc} alt="" /> */}
      </div>

    </div>
  )
}

export default ProfileHome