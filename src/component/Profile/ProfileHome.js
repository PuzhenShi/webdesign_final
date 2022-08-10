import React, { useState, useEffect } from "react";
import { setCookie, getCookieValue } from "../Cookie/Cookie";
import "./Profile.css"

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
      <div class="profilePanel rounded" id="profileHomePanel">
        <div class="row">
          <div class="col-3 col-sm-5 col-lg-3">user name:</div>
          {/* post username here */}
          <div id="profileHomeName" class="col"><label>{userFind.userName}</label></div>
        </div>
        <div class="row">
          <div class="col-3 col-sm-5 col-lg-3">user motto:</div>
          {/* post user sign here */}
          <div id="profileHomeSign" class="col"><label>{userFind.motto}</label></div>
        </div>

        <div class="row">
          <div class="col-3 col-sm-5 col-lg-3">user email: </div>
          <div id="profileHomeEmail" class="col"><label>{userFind.email}</label></div>
        </div>
        <div class="row">
          <div class="col-3 col-sm-5 col-lg-3">user gender: </div>
          <div id="profileHomeGender" class="col"><label>{userFind.gender}</label></div>
        </div>
        <div class="row">
          <div class="col-3 col-sm-5 col-lg-3">subscribe:</div>
          <div id="profileHomeSub" class="col"><label>{a}</label></div>
        </div>
        <div class="row">
          <div class="col-3 col-sm-5 col-lg-3">fans:</div>
          <div id="profileHomeFan" class="col"><label>{b}</label></div>
        </div>
        
        
       
        
        
        
        
        {/* <p>img</p> */}
        {/* <img src={imgsrc} alt="" /> */}
      </div>

    </div>
  )
}

export default ProfileHome