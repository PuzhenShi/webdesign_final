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

  let videos = [];
  let video1 = {};
  if(userFind.myFavorite){
    videos=userFind.myFavorite;
    let videos1=videos[0];
    video1 = {
      url: videos1.videoAddress,
      title: videos1.videoName,
      duration: video1.videoDuration,
      views: videos1.NOC,
      cover: videos1.videoCover,
      author: videos1.publisher,
      author_id: 1,
      date: videos1.uploadTime,
      VIP:videos1.VIP,
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
    <div class="col-10 ml-10 mb-10 rounded" id="myZoneHome">
      <div>MyZoneFavorite</div>
      {/* video card displayed here */}
      <div class="col-12 row" id="myZoneFavoriteGalleryFull">
        <div class="col-4">
          <VideoCover
            videoInfo={video1}
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
  )
}

export default MyZoneFavorite