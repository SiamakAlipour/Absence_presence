import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { POST } from '../constants';
import request from '../helpers/api';
import useFetch from '../hooks/useFetch';

import './Login.css';

function Login() {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		request('/auth/login', POST, { username, password })
			.then((data) => navigate('/'))
			.catch((err) => alert('Error'));
	};
	return (
		<div className='login p-3 w-100'>
			<h1 className='badge bg-dark fs-3'>Welcome</h1>
			<form action='' className='row form-control' onSubmit={handleLogin}>
				<input
					type='text'
					placeholder='username'
					className='form-control mt-3'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type='password'
					placeholder='password'
					className='form-control mt-3'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type='submit' className='btn btn-primary mt-4'>
					Login
				</button>
			</form>
		</div>
	);
}

export default Login;
