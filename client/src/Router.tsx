import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
function Router() {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	);
}

export default Router;
