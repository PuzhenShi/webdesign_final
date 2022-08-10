import React from "react";
import axios from "axios";
import swal from "sweetalert";

function UserTD(props) {

  let lockUser=(e)=>{//lock the user
    e.preventDefault();
    let users = fetch("http://localhost:3001/users/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      }).then(()=>{
        const newDelete={
          userName:props.username
        };
        axios.post("http://localhost:3001/users/delete", newDelete);
        swal({
          title: "Success",
          text: "Lock the user",
          icon: "lock",
        });

      })

  }

  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.email}</td>
      <td>{props.username}</td>
      <td>
        <button type="button" class="btn btn-danger" onClick={lockUser}>
          Lock
        </button>
      </td>
    </tr>
  );
}

export default UserTD;
