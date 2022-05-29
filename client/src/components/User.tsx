import React from 'react';
import './User.css';

type UserProps = {
  username: string;
  status: boolean;
};

function User({ username, status }: UserProps) {
  return (
    <div className="user">
      <div className="user__header">
        {/* username */}
        <p>{username}</p>
        {/* status */}
        {status ? (
          <span className="badge bg-success p-2">Present</span>
        ) : (
          <span className="badge bg-danger p-2">Absent</span>
        )}
      </div>
      <div className="user__footer">
        <div className="user__option">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default User;
