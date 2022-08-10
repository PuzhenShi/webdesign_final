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


  //console.log("userFind", userFind);

  //display myfavorite 
  let myFavoritelist = [];

  if (userFind.watchHistory) {
    myFavoritelist = userFind.watchHistory;
  }


  let myFavorite = (myFavoritelist) => {
    if (myFavoritelist.length == 0) {
      return (
        <div>

          You don't have any liked video!

        </div>
      )
    } else if (myFavoritelist.length == 1) {

      let videof1 = myFavoritelist[myFavoritelist.length - 1];

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

      return (
                    <div class="col-10 row unit-record">
                    <div class="col-4 videoCover">
                        <VideoCover
                            videoInfo={fvideo1}
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

                
               
      )
    } else if (myFavoritelist.length === 2) {
      let videof1 = myFavoritelist[myFavoritelist.length - 1];
      let videof2 = myFavoritelist[myFavoritelist.length - 2];
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

      return (
        <div class="col-12 row" id="historyPanel">
          <div class="col-10 row unit-record">
                    <div class="col-4 videoCover">
                        <VideoCover
                            videoInfo={fvideo1}
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
                            videoInfo={fvideo2}
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
        </div>
      )
    } else{
      let videof1 = myFavoritelist[myFavoritelist.length - 1];
      let videof2 = myFavoritelist[myFavoritelist.length - 2];
      let videof3 = myFavoritelist[myFavoritelist.length - 3];
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

      return (
        <div class="col-12 row" id="historyPanel">
          <div class="col-10 row unit-record">
                    <div class="col-4 videoCover">
                        <VideoCover
                            videoInfo={fvideo1}
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
                            videoInfo={fvideo2}
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
                            videoInfo={fvideo3}
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
        </div>
      )

    } 


  }


  let fvideo1 = {};
  let fvideo2 = {};
  let fvideo3 = {};

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
                {myFavorite(myFavoritelist)}

                {/* outlet required to load the components presented by secondary routes */}
                <Outlet />

            </div>
            {/* <section for common footer> */}


        </div>
    )
}

export default History