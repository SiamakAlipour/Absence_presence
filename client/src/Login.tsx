import React from 'react';
import './Login.css';
function Login() {
	return (
		<div className='login'>
			<h1 className='badge bg-dark fs-3 w-100'>Welcome</h1>
			<form action='' className='row form-control'>
				<input type='text' placeholder='username' className='form-input mt-3' />
				<input
					type='password'
					placeholder='password'
					className='form-input mt-3'
				/>
				<button type='submit' className='btn btn-primary mt-4'>
					Login
				</button>
			</form>
		</div>
	);
}

export default Login;
