import React, { useState, useEffect } from 'react';
import api from './helpers/api';
import User from './User';
import './Main.css';

type UsersProps = {
	_id?: string;
	username: string;
	status: boolean;
};

function Main() {
	const [users, setUsers] = useState<UsersProps[]>([
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: true,
		},
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: true,
		},
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: true,
		},
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: true,
		},
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: true,
		},
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: true,
		},
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: true,
		},
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: true,
		},
		{
			username: 'test',
			status: false,
		},
		{
			username: 'test',
			status: false,
		},
	]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(function fetchUsersList() {
		(async () =>
			await api
				.get('/auth')
				.then((res) => setUsers([...users, ...res.data.users]))
				.catch((err) => setError(err))
				.finally(() => setLoading(false)))();
	}, []);

	if (error) return <h1>{`error`}</h1>;
	return (
		<div className='main'>
			{loading && <h1>loading...</h1>}
			<div className='main__users-list'>
				{users.map((user) => (
					<User username={user.username} status={user.status} key={user._id} />
				))}
			</div>
		</div>
	);
}

export default Main;
