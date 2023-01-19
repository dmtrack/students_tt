import React from "react";
import { User } from "./User";
import { Preloader } from "./Preloader";

function Userslist({ users, loading }) {
  return (
    <div className="user-list">
      {loading ? (
        <Preloader />
      ) : (
        <>
          {users.length > 0 ? (
            <table>
              <thead style={{ color: "#ccc" }}>
                <tr>
                  <th>id</th>
                  <th>Nickname</th>
                  <th>E-mail</th>
                  <th>Registered</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {users && users.map((user) => <User key={user.id} {...user} />)}
              </tbody>
            </table>
          ) : (
            "no users"
          )}
        </>
      )}
    </div>
  );
}

export { Userslist };
