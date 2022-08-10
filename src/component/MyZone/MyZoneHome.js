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
                    {/* first eight vedio(recent like) display card will be posted here */}
                    <div class="col-12 rounded" id="myZoneLike">
                        <span>Recent Like</span>
                        <Link to="/myzone/like">
                            <Button variant="primary">
                                More
                            </Button>
                        </Link>
                        <div class="col-12 row" id="myZoneLikeGallery">
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
                </div>
            </div>
        </div>
    )
}

export default MyZoneHome