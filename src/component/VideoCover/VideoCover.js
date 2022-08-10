import React, { useState, useEffect } from "react";
import "./VideoCover.css";
import { Link } from "react-router-dom";
import { setCookie, getCookieValue } from "../Cookie/Cookie";
import swal from "sweetalert";

function VideoCover(props) {
  const { title, views, cover, duration, author, url, date, author_id, VIP } =
    //const video=
    props.videoInfo;
  //console.log(video);
  /*  const url =
    "https://dummyimage.com/" +
    props.coverWidth +
    "x" +
    props.coverHeight +
    "/#ffffff/000";  */

  //get current user
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
    //console.log(loginType);

    setCookie("loginType", parseInt(loginType), "", "");
    if (parseInt(loginType) == 0) {
      setCookie("currentUserID", "", "", "");
    } else if (parseInt(loginType) == 1) {
      setCurrentUser(userFind);
    }
  }, [loginType]);

  //console.log("userFind", userFind);

  const wrapperStyle = {
    width: "100%",
    margin: 0,
  };
  const contentStyle = {
    width: "100%",
    textAlign: "left",
    margin: "auto",
  };
  const titleStyle = {
    padding: "3px 0px 0px 0px",
    width: "100%",
  };
  const coverStyle = {
    "max-width": props.width,
    height: 0.6 * props.coverWidth,
  };

  function handleClick(e) {
    e.preventDefault();
    let videostatus = VIP;
    let userstatus = userFind.vipStatus;

    if (videostatus == false || (videostatus == true && userstatus == true)) {
      let viewvideo = fetch("http://localhost:3001/videodb/click", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          videoAddress: url,
        }),
      });
      window.location = "/video/" + url;
    } else {
      swal({
        title: "Oh No!",
        text: "This video is a VIP video, you can become a vip in myprofile page!",
        icon: "error",
      });
    }
  }
  return (
    <div style={wrapperStyle} className="video-display">
      <div style={contentStyle} className="cover">
        <div className="image">
          <Link to={`/video/${url}`} onClick={handleClick}>
            {/* <Link to={`/video/${video.id}`}> */}
            <img
              src={process.env.PUBLIC_URL + "/videos/" + cover}
              alt="cover"
              className="video-cover"
              style={coverStyle}
            ></img>
          </Link>
          <div className="views">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            <div className="number"> {views}</div>
            {/* <div className="number"> {video.NOC}</div> */}
          </div>
          <div className="duration">
            <div className="number">{duration}</div>
          </div>
        </div>
        <Link
          to={`/video/${url}`}
          style={titleStyle}
          className="title"
          onClick={handleClick}
        >
          {/* <Link to={`/video/${video.id}`} style={titleStyle} className="title"> */}
          {title}
          {/* {video.videoName} */}
        </Link>
        <br></br>
        <p
          /* to={`/user/${author_id}`} */ style={titleStyle}
          className="author"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
          {author}·{date}
          {/* {video.publisher}·{video.uploadTime} */}
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default VideoCover;
