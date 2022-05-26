import React from 'react';
import './User.css';
type UserProps = {
	username: string;
	status: boolean;
};

function User({ username, status }: UserProps) {
	return (
		<div className='user'>
			{/* username */}
			<p>{username}</p>
			{/* status */}
			{status ? (
				<span className='badge bg-success'>Present</span>
			) : (
				<span className='badge bg-danger'>Absent</span>
			)}
		</div>
	);
}

export default User;
