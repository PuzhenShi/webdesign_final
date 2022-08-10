import React, { useState, useEffect } from "react";
import { setCookie, getCookieValue } from "../Cookie/Cookie";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import VideoCover from "../VideoCover/VideoCover";
//the home page of my zone
//including the link to my uploaded vedios, my favorite vedios and recent like vedios
function MyZoneHome() {
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
  //dispaly favorite video
  let videof = [];
  let fvideo1 = {};
  let fvideo2 = {};
  let fvideo3 = {};
  if (userFind.myFavorite) {
    videof = userFind.myFavorite;
    let videof1 = videof[videof.length - 1];
    let videof2 = videof[videof.length - 2];
    let videof3 = videof[videof.length - 3];
    fvideo1 = {
      url: videof1.videoAddress,
      title: videof1.videoName,
      duration: videof1.videoDuration,
      views: videof1.NOC,
      cover: videof1.videoCover,
      author: videof1.publisher,
      author_id: 1,
      date: videof1.uploadTime,
      VIP: videof1.VIP,
    };
    fvideo2 = {
      url: videof2.videoAddress,
      title: videof2.videoName,
      duration: videof2.videoDuration,
      views: videof2.NOC,
      cover: videof2.videoCover,
      author: videof2.publisher,
      author_id: 1,
      date: videof2.uploadTime,
      VIP: videof2.VIP,
    };
    fvideo3 = {
      url: videof3.videoAddress,
      title: videof3.videoName,
      duration: videof3.videoDuration,
      views: videof3.NOC,
      cover: videof3.videoCover,
      author: videof3.publisher,
      author_id: 1,
      date: videof3.uploadTime,
      VIP: videof3.VIP,
    };

  }



  const video = {
    title: "title",
    duration: 180,
    views: 25,
    cover: 0,
    author: "author",
    link: "/video",
    date: "08/20",
  };

  return (
    <div class="container">
      <div class="col-12 row" id="myZonePanel">
        <div class="col-10 rounded">
          {/* first eight vedio(my vedio) display card will be posted here */}
          <div class="col-12 rounded" id="myZoneVedios">
            <span>My Vedios</span>
            <Link to="/myzone/vedios">
              <Button variant="primary">
                More
              </Button>
            </Link>

            <div class="col-12 row" id="myZoneVediosGallery">
              <div class="col-4">
                <VideoCover
                  videoInfo={video}
                  coverWidth={200}
                  coverHeight={120}
                  width={240}
                ></VideoCover>
              </div>
              <div class="col-4">
                <VideoCover
                  videoInfo={video}
                  coverWidth={200}
                  coverHeight={120}
                  width={240}
                ></VideoCover>
              </div>
              <div class="col-4">
                <VideoCover
                  videoInfo={video}
                  coverWidth={200}
                  coverHeight={120}
                  width={240}
                ></VideoCover>
              </div>


            </div>
          </div>
          {/* first eight vedio(favorite) display card will be posted here */}
          <div class="col-12 rounded" id="myZoneFavorite">
            <span>My Favorite</span>
            <Link to="/myzone/favorite">
              <Button variant="primary">
                More
              </Button>
            </Link>

            <div class="col-12 row" id="myZoneFavoriteGallery">
              <div class="col-4">
                <VideoCover
                  videoInfo={fvideo1}
                  coverWidth={200}
                  coverHeight={120}
                  width={240}
                ></VideoCover>
              </div>
              <div class="col-4">
                <VideoCover
                  videoInfo={fvideo2}
                  coverWidth={200}
                  coverHeight={120}
                  width={240}
                ></VideoCover>
              </div>
              <div class="col-4">
                <VideoCover
                  videoInfo={fvideo3}
                  coverWidth={200}
                  coverHeight={120}
                  width={240}
                ></VideoCover>
              </div>

            </div>
          </div>
          {/* first eight vedio(recent like) display card will be posted here */}

        </div>
      </div>
    </div>
  )
}

export default MyZoneHome