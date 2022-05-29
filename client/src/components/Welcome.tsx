import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../helpers/cookie';

function Welcome() {
	const user = getCookie('login');
	if (!user) {
		return <Navigate to='/login' />;
	}
	return <h1 className='row align-items-center'>Welcome</h1>;
}

export default Welcome;
