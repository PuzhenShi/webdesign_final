import React from "react";

function VideoTD(props) {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>
        <button type="button" class="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default VideoTD;
