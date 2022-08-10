import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Outlet, IndexRoute, Routes, Route, Link } from 'react-router-dom'
import VideoCover from "../VideoCover/VideoCover";
import Button from 'react-bootstrap/Button';
import { setCookie, getCookieValue } from "../Cookie/Cookie";


function History() {

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

  let videoh = [];
  let hvideo1 = {};
  let hvideo2 = {};
  let hvideo3 = {};
  let hvideo4 = {};
  let hvideo5 = {};
  let hvideo6 = {};
  if(userFind.watchHistory){
    videoh=userFind.watchHistory;
    let videoh1=videoh[videoh.length-1];
    let videoh2=videoh[videoh.length-2];
    let videoh3=videoh[videoh.length-3];
    let videoh4=videoh[videoh.length-4];
    let videoh5=videoh[videoh.length-5];
    let videoh6=videoh[videoh.length-6];
    hvideo1 = {
      url: videoh1.videoAddress,
      title: videoh1.videoName,
      duration: videoh1.videoDuration,
      views: videoh1.NOC,
      cover: videoh1.videoCover,
      author: videoh1.publisher,
      author_id: 1,
      date: videoh1.uploadTime,
      VIP:videoh1.VIP,
    };
    hvideo2 = {
        url: videoh2.videoAddress,
        title: videoh2.videoName,
        duration: videoh2.videoDuration,
        views: videoh2.NOC,
        cover: videoh2.videoCover,
        author: videoh2.publisher,
        author_id: 1,
        date: videoh2.uploadTime,
        VIP:videoh2.VIP,
      };
      hvideo3 = {
        url: videoh3.videoAddress,
        title: videoh3.videoName,
        duration: videoh3.videoDuration,
        views: videoh3.NOC,
        cover: videoh3.videoCover,
        author: videoh3.publisher,
        author_id: 1,
        date: videoh3.uploadTime,
        VIP:videoh3.VIP,
      };
      hvideo4 = {
        url: videoh4.videoAddress,
        title: videoh4.videoName,
        duration: videoh4.videoDuration,
        views: videoh4.NOC,
        cover: videoh4.videoCover,
        author: videoh4.publisher,
        author_id: 1,
        date: videoh4.uploadTime,
        VIP:videoh4.VIP,
      };
      hvideo5 = {
        url: videoh5.videoAddress,
        title: videoh5.videoName,
        duration: videoh5.videoDuration,
        views: videoh5.NOC,
        cover: videoh5.videoCover,
        author: videoh5.publisher,
        author_id: 1,
        date: videoh5.uploadTime,
        VIP:videoh5.VIP,
      };
      hvideo6 = {
        url: videoh6.videoAddress,
        title: videoh6.videoName,
        duration: videoh6.videoDuration,
        views: videoh6.NOC,
        cover: videoh6.videoCover,
        author: videoh6.publisher,
        author_id: 1,
        date: videoh6.uploadTime,
        VIP:videoh6.VIP,
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
            <p>History</p>
            <div class="col-12" id="histroyHeadBar">


                <div class="col-5">
                    {/* search and display the record */}
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search history" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

            </div>
            <div class="col-12 row" id="historyPanel">
{/* should display the records */}
                {/* a single record unit should be like this */}
                <div class="col-10 row unit-record">
                    <div class="col-4 videoCover">
                        <VideoCover
                            videoInfo={hvideo1}
                            coverWidth={200}
                            coverHeight={120}
                            width={240}
                        ></VideoCover>
                    </div>
                    <div class="col-4 historyTime">
                        <span class="history-time">
                            08/08/2022 15:24
                        </span>
                    </div>
                    <div class="col-2 deleteBtn">
                        <Button variant="primary">
                            delete
                        </Button>
                    </div>
                </div>

                <div class="col-10 row unit-record">
                    <div class="col-4 videoCover">
                        <VideoCover
                            videoInfo={hvideo2}
                            coverWidth={200}
                            coverHeight={120}
                            width={240}
                        ></VideoCover>
                    </div>
                    <div class="col-4 historyTime">
                        <span class="history-time">
                            08/08/2022 15:24
                        </span>
                    </div>
                    <div class="col-2 deleteBtn">
                        <Button variant="primary">
                            delete
                        </Button>
                    </div>
                </div>

                <div class="col-10 row unit-record">
                    <div class="col-4 videoCover">
                        <VideoCover
                            videoInfo={hvideo3}
                            coverWidth={200}
                            coverHeight={120}
                            width={240}
                        ></VideoCover>
                    </div>
                    <div class="col-4 historyTime">
                        <span class="history-time">
                            08/08/2022 15:24
                        </span>
                    </div>
                    <div class="col-2 deleteBtn">
                        <Button variant="primary">
                            delete
                        </Button>
                    </div>
                </div>

                {/* outlet required to load the components presented by secondary routes */}
                <Outlet />

            </div>
            {/* <section for common footer> */}


        </div>
    )
}

export default History