import React from "react";
import axios from "axios";
import swal from "sweetalert";

function VideoTD(props) {

  let deleteVideo=(e)=>{//admin delete videos
    e.preventDefault();
    let users = fetch("http://localhost:3001/videodb/videos")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      }).then(()=>{
        const newDelete={
          _id:props.id
        };
        axios.post("http://localhost:3001/videodb/delete", newDelete);
        swal({
          title: "Success",
          text: "Delete the video",
          icon: "lock",
        });

      })
  }

  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>
        <button type="button" class="btn btn-danger" onClick={deleteVideo}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default VideoTD;
