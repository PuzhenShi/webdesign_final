import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import Comment from "../Comment/Comment";
import Tag from "../Tag/Tag";
import VideoCover from "../VideoCover/VideoCover";
import { setCookie, getCookieValue } from "../Cookie/Cookie";
import "./VedioPage.css";
function VedioPage() {

  const [video1, setVideo1] = useState();
  const [videolist, setVideolist] = useState();
  const [watched,setwatched] = useState(false);
  const { url } = useParams();
 // console.log(url);

  //get currentuser:
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
        //  console.log("res",res);
      });
    console.log(loginType);

    setCookie("loginType", parseInt(loginType), "", "");
    if (parseInt(loginType) == 0) {
      setCookie("currentUserID", "", "", "");
    } else if (parseInt(loginType) == 1) {
      setCurrentUser(userFind);
    }
    //console.log('users',users);
  }, [loginType]);

  useEffect(() => {
    let videofind = fetch("http://localhost:3001/videodb/watch", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        videoAddress: url,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        // console.log(res);
        setVideo1(res);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/videodb/videos")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      //.then((res) => {console.log('res',res)})
      .then((res) => {
        setVideolist(res);
        // console.log('res2',res);
      });
  }, []);

  // console.log(video1);
  let video = {};
  if (video1) {
    video = {
      id: video1._id,
      title: video1.videoName,
      duration: 180,
      views: video1.NOC,
      cover: video1.videoCover,
      author: video1.publisher,
      author_id: 1,
      date: video1.uploadTime,
      url: video1.videoAddress,
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


   /*  fetch("http://localhost:3001/users/watchHistory",{
                method: 'POST',
                mode: 'cors',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  "userName": userFind.userName,
                  "watchHistory": video1
                })
              }).then(console.log("add watchlist")) */

    /* console.log(video.url);
    if(video.url=="/video/video2.mp4")
    url='/video/video2.mp4';
    else if(video.url=="/video/video1.mp4")
    url='/video/video1.mp4'; */
  } else {
    video = {
      id: 1,
      title: "title",
      duration: 180,
      views: 25,
      cover: 0,
      author: "author",
      author_id: 1,
      date: "08/20",
      url: "",
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

  //wacth history
  function watchvideo(){
    if(!watched){
    fetch("http://localhost:3001/users/watchHistory",{
                method: 'POST',
                mode: 'cors',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  "userName": userFind.userName,
                  "watchHistory": video1
                })
              }).then(console.log("add watchlist"));

              setwatched(true);
              console.log(watched);
            }
  }

  //console.log(url);

  //add comment
  const [commentText,setCommentText] = useState();
  function handleChange(event){
    setCommentText(event.target.value);
    console.log(commentText);
}

//console.log(commentText);
  function addComment(event){
    fetch("http://localhost:3001/videodb/addComment",{
      method: 'POST',
                mode: 'cors',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  "userName": userFind.userName,
                  "videoName":video1.videoName,
                  "commentText":commentText,
                })
    }).then(console.log("add comment success"))
  }

  var recommendVideo = [];
  if (videolist) {
    let videosleg = videolist.length;
    let videos1;
    let videos2;
    if (videolist[videosleg - 1].videoAddress != url) {
      videos1 = videolist[videosleg - 1];
      if (videolist[videosleg - 2].videoAddress != url)
        videos2 = videolist[videosleg - 2];
      else videos2 = videolist[videosleg - 3];
    } else {
      videos1 = videolist[videosleg - 2];
      videos2 = videolist[videosleg - 3];
    }

    recommendVideo = [
      {
        id: videos1._id,
        title: videos1.videoName,
        views: videos1.NOC,
        cover: videos1.videoCover,
        author: videos1.publisher,
        author_id: 2,
        date: videos1.uploadTime,
        url: videos1.videoAddress,
      },
      {
        id: videos2._id,
        title: videos2.videoName,
        views: videos2.NOC,
        cover: videos2.videoCover,
        author: videos2.publisher,
        author_id: 2,
        date: videos2.uploadTime,
        url: videos2.videoAddress,
      },
    ];
  } else {
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

  const comment = video.comments.map((comment) => {
    return (
      <Comment
        title={comment.userName}
        content={comment.commentText}
        date={comment.time}
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
  const commentStyle = {
    width: "100%",
  };
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
            <video width="100%" controls onFocus={watchvideo}>
              <source src={`/videos/${url}.mp4`} type="video/mp4" />
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

          <div className="tags">
            <span id="like">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-hand-thumbs-up"
                viewBox="0 0 16 16"
              >
                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
              </svg>{" "}
              like
            </span>
            <span id="dislike">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-hand-thumbs-down"
                viewBox="0 0 16 16"
              >
                <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z" />
              </svg>{" "}
              dislike
            </span>
            <span id="share">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-share"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
              </svg>{" "}
              share
            </span>
          </div>
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
              <form style={commentStyle}>
                <div className="input-group">
                  <input
                    className="form-control"
                    placeholder="Send friendly comments"
                    rows="2"
                    value={commentText}
                    name="commentText"
                    onChange={handleChange}
                    required
                  ></input>
                  <span class="input-group-btn">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      id="commentSubmitBtn"
                      onClick={addComment}
                    >
                      Submit
                    </button>
                  </span>
                </div>
              </form>
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
