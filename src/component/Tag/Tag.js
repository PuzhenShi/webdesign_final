import React from "react";

function Tag(props) {
  const style = {
    margin: "3px",
  };
  return (
    <button type="button" className="btn btn-light btn" style={style}>
      {props.text}
    </button>
  );
}

export default Tag;
