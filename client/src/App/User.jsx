import React from "react";

export function User(props) {
  const { id, nickname, email, registered, status } = props;

  return (
    <>
      <tr>
        <td style={{ textAlign: "center", width: "50px", height: "30px" }}>
          {id}
        </td>
        <td style={{ textAlign: "center", width: "100px" }}>{nickname}</td>
        <td style={{ textAlign: "center", width: "100px" }}>{email}</td>
        <td style={{ textAlign: "center", width: "150px" }}>{registered}</td>
        <td style={{ textAlign: "center", width: "100px" }}>{status}</td>
      </tr>
    </>
  );
}
