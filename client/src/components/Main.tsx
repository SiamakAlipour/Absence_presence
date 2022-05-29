import React from 'react';
import User from './User';
import './Main.css';
import useFetch from '../hooks/useFetch';
import { PATCH, GET } from '../constants';
import request from '../helpers/api';

type UsersProps = {
	_id: string;
	username: string;
	status: boolean;
};

function Main() {
	const [data, loading, error] = useFetch('/auth', GET, null);

	const handleReset = () => {
		request('/auth/reset', PATCH, null)
			.then((data) => console.log(data))
			.catch((err) => console.log(error));
		window.location.reload();
	};
	const handleRefresh = () => {
		window.location.reload();
	};
	if (error) return <h1>{`error`}</h1>;

	return (
		<div className='main'>
			<div className='main__users-options'>
				<div className='main__users-reset' onClick={handleReset}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
				</div>
				<div className='main__users-reset' onClick={handleRefresh}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
						/>
					</svg>
				</div>
			</div>
			{loading ? (
				<h1>loading...</h1>
			) : (
				<div className='main__users-list'>
					{data.users.map((user: UsersProps) => {
						if (user.username === 'admin') return;
						return (
							<User
								username={user.username}
								status={user.status}
								key={user._id}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default Main;
