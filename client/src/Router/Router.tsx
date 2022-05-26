import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Main from '../components/Main';
function Router() {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	);
}

export default Router;
