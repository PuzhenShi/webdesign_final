import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import Comment from "../Comment/Comment";
import Tag from "../Tag/Tag";
import VideoCover from "../VideoCover/VideoCover";
import {setCookie,getCookieValue} from "../Cookie/Cookie"
import "./VedioPage.css";
function VedioPage() {

  const[video1,setVideo1] =useState();
  const[videolist,setVideolist] = useState();
  const {url} = useParams();
  console.log(url);

  //get currentuser:
  let loginCookie = getCookieValue("loginType");
   // console.log("loginCookie",loginCookie);
    const [loginType, setLoginType] = useState(loginCookie===null?0:parseInt(loginCookie));
    if (loginCookie === null){
        loginCookie = setCookie("loginType", 0, "", "");
    }
    //console.log("loginType",loginType);
    const [users, setUsers] = useState([{
        _id:Object,
        userName: ""
    }]);

    

    // set currentUser
    let getCurrentUser = (currentUserID) => {
        if(currentUserID == ""){
            return {
                _id:Object,
                userName: ""
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
            userName: ""
        };
    };
    let userFind = getCurrentUser(getCookieValue('currentUserID'));
    
  //  console.log('userFind',userFind);
    const [currentUser, setCurrentUser] = useState(userFind);
    //console.log('currentUser',currentUser);
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
            console.log(loginType);

        setCookie("loginType", parseInt(loginType), "", "");
        if(parseInt(loginType) == 0){
            setCookie("currentUserID", "", "", "");
        }else if(parseInt(loginType) == 1){
            setCurrentUser(userFind);
        }
        //console.log('users',users);
    },[loginType]);



   useEffect(() => {
    let videofind = fetch("http://localhost:3001/videodb/watch",{
                method: 'POST',
                mode: 'cors',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  "videoAddress": url
                })
              }).then((res) =>{
                if(res.ok){
                  return res.json()
                }
              }).then((res) =>{
               // console.log(res);
                setVideo1(res);
              })
  },[])

  useEffect(() => {
    fetch("http://localhost:3001/videodb/videos")
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        //.then((res) => {console.log('res',res)})
        .then((res) => {
          
          setVideolist(res);
         // console.log('res2',res);
        });
      },[]);
  
 // console.log(video1);
  let video = {};
  if(video1){
    video={
      id: video1._id,
    title: video1.videoName,
    duration: 180,
    views: video1.NOC,
    cover: video1.videoCover,
    author: video1.publisher,
    author_id: 1,
    date: video1.uploadTime,
    url:video1.videoAddress,
    tags: [
      "NetFlix",
      "NetFlix",
      "aaaaa",
      "NetFlix",
      "NetFlix",
      "NetFlix",
      "NetFlix",
    ],
    comments: video1.comment,
    };

    fetch("http://localhost:3001/users/watchHistory",{
                method: 'POST',
                mode: 'cors',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  "userName": userFind.userName,
                  "watchHistory": video1
                })
              })

    /* console.log(video.url);
    if(video.url=="/video/video2.mp4")
    url='/video/video2.mp4';
    else if(video.url=="/video/video1.mp4")
    url='/video/video1.mp4'; */
  }else{
    video = {
      id: 1,
      title: "title",
      duration: 180,
      views: 25,
      cover: 0,
      author: "author",
      author_id: 1,
      date: "08/20",
      url:"",
      tags: [
        "NetFlix",
        "NetFlix",
        "aaaaa",
        "NetFlix",
        "NetFlix",
        "NetFlix",
        "NetFlix",
      ],
      comments: [
        {
          title: "Comment 1",
          content: "Please never stop making this show",
          date: "2022-06-15 21:51",
        },
        {
          title: "Comment 2",
          content: "Hi",
          date: "2022-08-17 21:51",
        },
      ],
    };
  }
  
  //console.log(url);

  var recommendVideo =[];
  if(videolist){
    let videosleg = videolist.length;
    let videos1;
    let videos2;
    if(videolist[videosleg-1].videoAddress!=url){
      videos1 = videolist[videosleg-1];
      if(videolist[videosleg-2].videoAddress!=url)
      videos2=videolist[videosleg-2];
      else videos2 = videolist[videosleg-3];
    }else{
      videos1 =videolist[videosleg-2];
      videos2 = videolist[videosleg-3];
    }

    recommendVideo = [
      {
      id: videos1._id,
      title: videos1.videoName,
      duration: 180,
      views: videos1.NOC,
      cover: videos1.videoCover,
      author: videos1.publisher,
      author_id: 2,
      date: videos1.uploadTime,
      url:videos1.videoAddress
      },{
        id: videos2._id,
        title: videos2.videoName,
        duration: 180,
        views: videos2.NOC,
        cover: videos1.videoCover,
        author: videos2.publisher,
        author_id: 2,
        date: videos2.uploadTime,
        url:videos1.videoAddress
        }
    ]
  

  }else{
    recommendVideo = [
      {
        id: 2,
        title: "recommend 1",
        duration: 180,
        views: 25,
        cover: 0,
        author: "author 1",
        author_id: 2,
        date: "08/20",
      },
      {
        id: 3,
        title: "recommend 2",
        duration: 180,
        views: 25,
        cover: 0,
        author: "author 2",
        author_id: 3,
        date: "08/20",
      },
    ];
  }

  
  

 

  const tags = video.tags.map((tagText) => {
    return <Tag text={tagText}></Tag>;
  });
  const comment = video.comments.map((comment) => {
    return (
      <Comment
        title={comment.title}
        content={comment.content}
        date={comment.date}
      ></Comment>
    );
  });
  const recommendVideoList = recommendVideo.map((recommend) => {
    return (
      <VideoCover
        videoInfo={recommend}
        coverWidth={200}
        coverHeight={120}
        width={240}
      ></VideoCover>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-1"></div>
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-8 video">
          <div className="title">
            <h3>{video.title}</h3>
            <div className="data">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-play"
                viewBox="0 0 16 16"
              >
                <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
              </svg>
              {video.views}
            </div>
            <div className="data">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-text-paragraph"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              22
            </div>
            <div className="time">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clock-history"
                viewBox="0 0 16 16"
              >
                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
              </svg>
              {video.date}
            </div>
          </div>
          <div className="content">
            <video  width="100%" controls>
            <source src={`/video/${url}.mp4`} type="video/mp4" />
            </video>
            <nav className="navbar bg-light">
              <div className="row bullet-chat">
                <div className="col-5 status">
                  <div>2 People are watching, 2 bullet chats</div>
                </div>
                <div className="col-7">
                  <form className="d-flex send" role="search">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    ></input>
                    <button className="btn btn-primary btn">Send</button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
          <div className="tags">{tags}</div>
          <div className="divider">
            <hr className="solid"></hr>
          </div>
          <div className="comments">
            <h5>Comments</h5>
            <div className="send d-flex">
              <div className="avatar">
                <a>
                  <Avatar height="60" width="60"></Avatar>
                </a>
              </div>
              <textarea
                className="form-control"
                placeholder="Send friendly comments"
                rows="1"
              ></textarea>
            </div>
            {comment}
          </div>
        </div>
        <div className="d-none d-md-block col-md-3 col-lg-3 col-xl-3">
          <div className="releaser d-flex">
            <div className="avatar">
              <a>
                <Avatar height="80" width="80"></Avatar>
              </a>
            </div>
            <div className="info">
              <a href="">{video.author}</a>
            </div>
          </div>
          <div className="recommend-area">{recommendVideoList}</div>
        </div>
      </div>
    </div>
  );
}

export default VedioPage;
