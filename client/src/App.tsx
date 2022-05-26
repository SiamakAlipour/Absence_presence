import React, { useEffect, useState } from 'react';
import api from './api';
import axios from 'axios';
import './App.css';
import User from './User';

type UsersProps = {
	_id?: string;
	username: string;
	status: boolean;
};
function App() {
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
		<div className='app'>
			{loading && <h1>loading...</h1>}
			<div className='app__users-list'>
				{users.map((user, index) => (
					<User username={user.username} status={user.status} />
				))}
			</div>
		</div>
	);
}

export default App;
