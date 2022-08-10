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

  console.log("curr",currentUser);



  return (
    <div class="col-8 ml-8 mb-8 rounded">
      {/* the right panel of profile home, display the basic info of this user but can't edit */}
      <div id="profileHomePanel" class="profilePanel">       
        
        <p>user name:</p>
        {/* post username here */}
        <div id="profileHomeName"><label>{userFind.userName}</label></div>
        <p>user sign:</p>
        {/* post user sign here */}
        <div id="profileHomeSign"></div>
        {/* the number of subscribed publishers and fans */}
        <p>subscribe:</p>
        <div id="profileHomeSub"></div>
        <p>fans:</p>
        <div id="profileHomeFan"></div>
      </div>
      <p>ProfileHome</p>

    </div>
  )
}

export default ProfileHome