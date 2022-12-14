import React, { useState, useEffect } from "react";
import { setCookie, getCookieValue } from "../Cookie/Cookie";
import VideoCover from "../VideoCover/VideoCover";

function MyZoneFavorite() {

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

  if (userFind.myFavorite) {
    myFavoritelist = userFind.myFavorite;
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
        <div class="col-4">
          <VideoCover
            videoInfo={fvideo1}
            coverWidth={200}
            coverHeight={120}
            width={240}
          ></VideoCover>
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
        </div>
      )
    } else if (myFavoritelist.length === 3) {
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
      )

    } else if (myFavoritelist.length === 4) {
      let videof1 = myFavoritelist[myFavoritelist.length - 1];
      let videof2 = myFavoritelist[myFavoritelist.length - 2];
      let videof3 = myFavoritelist[myFavoritelist.length - 3];
      let videof4 = myFavoritelist[myFavoritelist.length - 4];
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
      fvideo4 = {
        url: videof4.videoAddress,
        title: videof4.videoName,
        duration: videof4.videoDuration,
        views: videof4.NOC,
        cover: videof4.videoCover,
        author: videof4.publisher,
        author_id: 1,
        date: videof4.uploadTime,
        VIP: videof4.VIP,
      };

      return (
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
          <div class="col-4">
            <VideoCover
              videoInfo={fvideo4}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
          </div>
        </div>
      )

    } else if (myFavoritelist.length === 5) {
      let videof1 = myFavoritelist[myFavoritelist.length - 1];
      let videof2 = myFavoritelist[myFavoritelist.length - 2];
      let videof3 = myFavoritelist[myFavoritelist.length - 3];
      let videof4 = myFavoritelist[myFavoritelist.length - 4];
      let videof5 = myFavoritelist[myFavoritelist.length - 5];
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
      fvideo4 = {
        url: videof4.videoAddress,
        title: videof4.videoName,
        duration: videof4.videoDuration,
        views: videof4.NOC,
        cover: videof4.videoCover,
        author: videof4.publisher,
        author_id: 1,
        date: videof4.uploadTime,
        VIP: videof4.VIP,
      };
      fvideo5 = {
        url: videof5.videoAddress,
        title: videof5.videoName,
        duration: videof5.videoDuration,
        views: videof5.NOC,
        cover: videof5.videoCover,
        author: videof5.publisher,
        author_id: 1,
        date: videof5.uploadTime,
        VIP: videof5.VIP,
      };

      return (
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
          <div class="col-4">
            <VideoCover
              videoInfo={fvideo4}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
          </div>
          <div class="col-4">
            <VideoCover
              videoInfo={fvideo5}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
          </div>
        </div>
      )

    } else {
      let videof1 = myFavoritelist[myFavoritelist.length - 1];
      let videof2 = myFavoritelist[myFavoritelist.length - 2];
      let videof3 = myFavoritelist[myFavoritelist.length - 3];
      let videof4 = myFavoritelist[myFavoritelist.length - 4];
      let videof5 = myFavoritelist[myFavoritelist.length - 5];
      let videof6 = myFavoritelist[myFavoritelist.length - 6];
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
      fvideo4 = {
        url: videof4.videoAddress,
        title: videof4.videoName,
        duration: videof4.videoDuration,
        views: videof4.NOC,
        cover: videof4.videoCover,
        author: videof4.publisher,
        author_id: 1,
        date: videof4.uploadTime,
        VIP: videof4.VIP,
      };
      fvideo5 = {
        url: videof5.videoAddress,
        title: videof5.videoName,
        duration: videof5.videoDuration,
        views: videof5.NOC,
        cover: videof5.videoCover,
        author: videof5.publisher,
        author_id: 1,
        date: videof5.uploadTime,
        VIP: videof5.VIP,
      };
      fvideo6 = {
        url: videof6.videoAddress,
        title: videof6.videoName,
        duration: videof6.videoDuration,
        views: videof6.NOC,
        cover: videof6.videoCover,
        author: videof6.publisher,
        author_id: 1,
        date: videof6.uploadTime,
        VIP: videof6.VIP,
      };
      return (
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
          <div class="col-4">
            <VideoCover
              videoInfo={fvideo4}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
          </div>
          <div class="col-4">
            <VideoCover
              videoInfo={fvideo5}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
          </div>
          <div class="col-4">
            <VideoCover
              videoInfo={fvideo6}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
          </div>
        </div>
      )
    }


  }


  let fvideo1 = {};
  let fvideo2 = {};
  let fvideo3 = {};
  let fvideo4 = {};
  let fvideo5 = {};
  let fvideo6 = {};






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
    <div class="col-12 ml-12 mb-12 rounded" id="myZoneHome">
      <div class="col-12 rounded" id="myZoneFavoriteBar">
        <span>My Favorite</span>

      </div>
      {/* video card displayed here */}
      <div class="col-12 row" id="myZoneFavoriteGalleryFull">
        {myFavorite(myFavoritelist)}
      </div>
    </div>
  )
}

export default MyZoneFavorite