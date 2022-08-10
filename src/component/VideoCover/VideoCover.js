import React from "react";
import "./VideoCover.css";
import { Link } from "react-router-dom";

function VideoCover(props) {
  const { title, views, cover, duration,author, url, date, author_id, video } =
    //const video=
    props.videoInfo;
  //console.log(video);
  /*  const url =
    "https://dummyimage.com/" +
    props.coverWidth +
    "x" +
    props.coverHeight +
    "/#ffffff/000";  */

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
    height: 0.6*props.coverWidth,
  };

  function handleClick(e) {
    let viewvideo = fetch("http://localhost:3001/videodb/click", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        videoAddress: url,
      }),
    });

    window.location='/video/'+url;
  }
  return (
    <div style={wrapperStyle} className="video-display">
      <div style={contentStyle} className="cover">
        <div className="image">
          <Link to={`/video/${url}`} onClick={handleClick}>
            {/* <Link to={`/video/${video.id}`}> */}
            <img
              src={process.env.PUBLIC_URL + '/videos/'+ cover}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
            <div className="number">{duration}</div>
          </div> 
        </div>
        <Link
          to={`/video/${url}` }
          style={titleStyle}
          className="title"
          onClick={handleClick}
        >
          {/* <Link to={`/video/${video.id}`} style={titleStyle} className="title"> */}
          {title}
          {/* {video.videoName} */}
        </Link>
        <br></br>
        <p /* to={`/user/${author_id}`} */ style={titleStyle} className="title">
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
