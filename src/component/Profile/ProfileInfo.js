import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { setCookie, getCookieValue } from "../Cookie/Cookie";
function ProfileInfo() {
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




  const navigate = useNavigate();
  var valPwd = /^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?\(\)]).*$/;

  //script for datepicker component
  const [startDate, setStartDate] = useState(new Date());
  const [input, setInput] = useState({
    userName: '',
    userSign: '',
    userPassword: ''
  });
  const [radio, setRadio] = useState({
    gender: ''
  })


  //script for modal component
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleChange(event) {//get input content
    const { name, value } = event.target;
    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }


  function chooseGender(event) {//get the gender
    const { name, value } = event.target;
    setRadio(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  const modify = (event) => {//submit modify data
    event.preventDefault();
    if (input.userName === '') {
      alert("Please input name");
      return false;
    }
    else if (input.userPassword === '') {
      alert("Please input your password");
      return false;
    }
    else if (radio.gender === '') {
      alert("Please choose your gender");
      return false;
    }
    else {
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
          if (!input.userPassword.match(valPwd)) {
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
          } else {
            const newPro = {
              oldUserName: userFind.userName,
              userName: input.userName,
              password: input.userPassword,
              gender: radio.gender,
              motto: input.userSign,
              DOM: startDate.toLocaleDateString()

            };
            console.log(newPro);
            axios.post('http://localhost:3001/users/update', newPro);
            swal({
              title: "Thanks!",
              text: "Update successfully",
              icon: "success",
            });
            //return (
            //navigate('/')
            //)

          };
        });
      //alert(input.userName);
      //alert(input.userSign);
      //alert(input.userPassword);
      //alert(radio.gender);
      //alert(startDate.toLocaleDateString());
    }



  }


  //ProfileDatePicker();
  return (
    <div class="col-8 ml-8 mb-8 rounded" id="profileInfoOut">
      {/* the right panel of profile info, display the basic info of this user and user can edit them */}
      <div id="profileInfoPanel" class="profilePanel">
        {/* post username here */}
        {/* the number of subscribed publishers and fans */}
        <div class="row">
          <div class="col-3 col-sm-4 col-lg-3 infoLabel">user name: </div>
          <div class="col">
            <input type={"text"} class="form-control" id="profileInfoName" name='userName' value={input.userName} onChange={handleChange} required />
          </div>
        </div>

        {/* post username here, use placeholder to display exsit username */}


        <div class="row">
          <div class="col-3 col-sm-4 col-lg-3 infoLabel">motto:</div>
          <div class="col">
            <input type={"text"} class="form-control" id="profileInfoSign" name='userSign' value={input.userSign} onChange={handleChange} required />
          </div>
        </div>

        <div class="row">
          <div class="col-3 col-sm-4 col-lg-3 infoLabel">password:</div>
          <div class="col">
            <input type={"text"} class="form-control" id="profileInfoPassword" name='userPassword' value={input.userPassword} onChange={handleChange} required />
          </div>
        </div>

        <div class="row">
          <div class="col-3 col-sm-4 col-lg-3 infoLabel">gender:</div>
          <div class="col">
            <div class="btn-group " role="group" aria-label="Basic radio toggle button group" onChange={chooseGender}>
              <input type="radio" class="btn-check" name="gender" id="genderMale" autocomplete="off" value='male' />
              <label class="btn btn-outline-primary" for="genderMale">male</label>

              <input type="radio" class="btn-check" name="gender" id="genderFemale" autocomplete="off" value='female' />
              <label class="btn btn-outline-primary" for="genderFemale">female</label>

              <input type="radio" class="btn-check" name="gender" id="genderOther" autocomplete="off" value='other' />
              <label class="btn btn-outline-primary" for="genderOther">other</label>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-3 col-sm-4 col-lg-3 infoLabel">birth date:</div>
          <div class="col">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
        </div>
        {/* birthdate select section, but script uncomplete */}




        {/* <!-- save button with Modal --> */}
        <div>
          <Button variant="primary" id="profileInfoBtn" onClick={handleShow}>
            save
          </Button>
        </div>


        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Warning</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure to save the changes?</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={modify}>
              Yes
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>

          </Modal.Footer>
        </Modal>


      </div>

    </div>


  )
}

export default ProfileInfo;