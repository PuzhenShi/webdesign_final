import React from "react";

function UserTD(props) {

  let lockUser=(e)=>{
    e.preventDefault();

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
