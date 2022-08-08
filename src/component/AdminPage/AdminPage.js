import React from "react";
import UserTD from "./UserTD/UserTD";

function AdminPage() {
  const users = [
    {
      id: 1,
      Email: "chen.ren@northeastern.edu",
      username: "r3nq1",
    },
    {
      id: 2,
      Email: "990406crq@gmail.com",
      username: "rrrrq",
    },
  ];

  const userList = users.map((user) => {
    return (
      <UserTD email={user.Email} username={user.username} id={user.id}></UserTD>
    );
  });

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path
                      fill-rule="evenodd"
                      d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                    />
                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                  </svg>
                  <span className="ms-1 d-none d-sm-inline">User List</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-film"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                  </svg>
                  <span className="ms-1 d-none d-sm-inline">Video List</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col py-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{userList}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
