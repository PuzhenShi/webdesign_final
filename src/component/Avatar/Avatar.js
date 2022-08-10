import React from "react";
import "./Avatar.css";

function Avatar(props) {
  const url = props.portrait;
  const height = props.height;
  const avatarStyle = {
    height: height,
  };

  return (
    <div className="avatar">
      <img
        src={process.env.PUBLIC_URL + "/" + url}
        alt="avatar"
        style={avatarStyle}
      ></img>
    </div>
  );
}

export default Avatar;
