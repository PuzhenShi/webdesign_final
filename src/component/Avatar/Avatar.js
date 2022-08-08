import React from "react";
import "./Avatar.css";

function Avatar(props) {
  const url =
    "https://dummyimage.com/" +
    props.width +
    "x" +
    props.height +
    "/#ffffff/000";
  return (
    <div className="avatar">
      <img src={url} alt="avatar"></img>
    </div>
  );
}

export default Avatar;
