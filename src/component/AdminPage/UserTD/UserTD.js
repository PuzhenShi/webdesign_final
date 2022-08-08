import React from "react";

function UserTD(props) {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.email}</td>
      <td>{props.username}</td>
      <td>
        <button type="button" class="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default UserTD;
