import React, {useState,useEffect} from "react";
import "./LoginPage.css";
import {setCookie,getCookieValue} from "../Cookie/Cookie"
import swal from 'sweetalert';

function LoginPage() {


  let loginCookie = getCookieValue("loginType");
   // console.log("loginCookie",loginCookie);
    const [loginType, setLoginType] = useState(loginCookie===null?0:parseInt(loginCookie));
    if (loginCookie === null){
        loginCookie = setCookie("loginType", 0, "", "");
    }
    //console.log("loginType",loginType);
    const [users, setUsers] = useState([{
        _id:Object,
        userName: "",
        password: ""
    }]);

    

    // set currentUser
    let getCurrentUser = (currentUserID) => {
        if(currentUserID == ""){
            return {
                _id:Object,
                userName: "",
                password: ""
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
        for(let i = 0; i < users.length; i++){
            if(users[i]._id == currentUserID){
                // setInfoUserName(users[i].userName);
                // setInfoUserPwd(users[i].password);
                
                return users[i];
            }
        }
        return {
            _id:Object,
            userName: "",
            password: ""
        };
    };
    let userFind = getCurrentUser(getCookieValue('currentUserID'));
    
   // console.log('userFind',userFind);
    const [currentUser, setCurrentUser] = useState(userFind);
//

    useEffect(() => {
      fetch("http://localhost:3001/users/users")
      .then(res => {
          if (res.ok) {
              return res.json();
          }
      })
      .then((res) => {
        setUsers(res);
      //  console.log("res",res);
      
      });

        setCookie("loginType", parseInt(loginType), "", "");
        if(parseInt(loginType) == 0){
            setCookie("currentUserID", "", "", "");
        }else if(parseInt(loginType) == 1){
            setCurrentUser(userFind);
        }
        console.log('users',users);
    },[loginType]);


    
    const [InfoUserName, setInfoUserName] = useState(currentUser.userName);
    const [InfoUserPwd, setInfoUserPwd] = useState(currentUser.password);
    let inputUserNameChange = (e)=>{
        setInfoUserName(e.target.value);
        console.log('UserName Input',e.target.value);
    };

    let inputUserPwdChange = (e)=>{
        setInfoUserPwd(e.target.value);
        console.log('Pwd Input',e.target.value);
    };
    //console.log(users);

    // let imgUser = "";

    let login = (e)=>{
      e.preventDefault();
        let flag = false;
        
        users.find((item) => {
            if (item.userName == InfoUserName ) {
              let userfindbyname = fetch("http://localhost:3001/users/login",{
                method: 'POST',
                mode: 'cors',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  "password": InfoUserPwd,
                  "result": item
                })
              })
              .then(res=>{
                console.log(res.status);
                if(res.status==200){
                  setCookie("currentUserID", item._id, "", "");
                setLoginType(1);
                flag = true;
               window.location='/'
                console.log('login success');
                } else{
                  console.log('login fail');
                  swal({
                    title: "Oh No!",
                    text: "Wrong User Name or Password!",
                    icon: "error",
                  });
                } 
              })
                //setCookie("loginType", 1, "", "");
                
            }
        });
         /* if (flag ==false) {
            swal({
                title: "Oh No!",
                text: "Wrong User Name or Password!",
                icon: "error",
              }); 
        } */
    }; 


    let path = `/userinfo/${userFind.userName}`
   // console.log('currentUser',currentUser);

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
                <label htmlFor="exampleInputUsername" className="form-label">
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
                <label htmlFor="exampleInputPassword1" className="form-label">
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
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary" onClick={login}>
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
