import React from "react";
import "./Avatar.css";

function Avatar(props) {
  const url =props.portrait;
  
    
  return (
    <div className="avatar">
      <img src={process.env.PUBLIC_URL + "/" + url} alt="avatar"></img>
    </div>
  );
}

export default Avatar;
