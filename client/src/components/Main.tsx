import React, { useState, useEffect } from 'react';
import api from '../helpers/api';
import User from './User';
import './Main.css';
import useFetch from '../hooks/useFetch';

type UsersProps = {
	_id?: string;
	username: string;
	status: boolean;
};

function Main() {
	const [data, loading, error] = useFetch('/auth', 'GET', null);

	if (error) return <h1>{`error`}</h1>;

	return (
		<div className='main'>
			{loading ? (
				<h1>loading...</h1>
			) : (
				<div className='main__users-list'>
					{data.users.map((user: UsersProps) => (
						<User
							username={user.username}
							status={user.status}
							key={user._id}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Main;
