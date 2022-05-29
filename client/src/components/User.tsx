import React from "react";
import "./User.css";
type UserProps = {
  username: string;
  status: boolean;
};

function User({ username, status }: UserProps) {
  return (
    <div className="user">
      {/* username */}
      <p>{username}</p>
      {/* status */}
      {status ? (
        <span className="badge bg-success p-2">Present</span>
      ) : (
        <span className="badge bg-danger p-2">Absent</span>
      )}
    </div>
  );
}

export default User;
