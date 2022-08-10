import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import swal from "sweetalert";
import StripeCheckout from "react-stripe-checkout";
import { setCookie, getCookieValue } from "../Cookie/Cookie";

function ProfilePay() {
    //get currentuser
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
        //  console.log("res",res);
      });
    console.log(loginType);

    setCookie("loginType", parseInt(loginType), "", "");
    if (parseInt(loginType) == 0) {
      setCookie("currentUserID", "", "", "");
    } else if (parseInt(loginType) == 1) {
      setCurrentUser(userFind);
    }
    //console.log('users',users);
  }, [loginType]);
  
  
let currentstatus = userFind.vipStatus;
console.log(currentstatus);

let Premium;
if(currentstatus){
    Premium="Welcome,premium!"
}else{
    Premium="Sorry,you are not out premium."
}

let checkout = (currentstatus) =>{
    if(currentstatus){
        return(
            <div>
                Enjoy you time in dilidili!
            </div>
        )
    }else{
        return(
            <StripeCheckout
            className="center"
            stripeKey="pk_test_51LUFovIe09HPYEv3ODFn6Kq8y4H8WIh4LBcZP6EzH0f5Drhtp6vxMs4ohvsSmDM8VrfCuA63g1twcGM2WJe7sg1Z00aKnFtBY0"
            token={handleToken}
            amount={19.9*100}
            name="Monthly premium"
          />
        )
    }
}


    async function handleToken(token) {
        const response = await axios.post(
          "http://localhost:3001/users/checkout",
          { token }
        );

    console.log(response.status)
 
    if (response.status === 200) {
        fetch("http://localhost:3001/users/updateVIP", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: userFind.userName,
        vipStatus:true,
      }),
    })
        swal({
            title: "Thank you!",
            text: "purchase success!",
            icon: "success",
          });


    } else {
        swal({
            title: "Oh No!",
            text: "something went wrong!",
            icon: "error",
          });
    }
  }

    return (
        <div class="col-8 ml-8 mb-8 rounded">
            <p>ProfilePremium</p>
            {/* the right panel of profile home, display the basic info of this user but can't edit */}
            <div id="profileHomePanel" class="profilePanel">

                <p>user name:</p>
                {userFind.userName}
                <div id="profileHomeName"></div>
                <p>Premium:</p>
                {Premium}

            </div>
            <div>
            {checkout(currentstatus)}
            </div>


        </div>
    )
}

export default ProfilePay