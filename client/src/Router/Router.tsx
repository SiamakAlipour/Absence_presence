import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Main from '../components/Main';
import Welcome from '../components/Welcome';
import PrivateRoute from './PrivateRoute';
function Router() {
	return (
		<Routes>
			<Route path='/' element={<Welcome />} />
			<Route path='/welcome' element={<Welcome />} />
			<Route path='/login' element={<Login />} />
			<Route
				path='/admin'
				element={
					<PrivateRoute>
						<Main />
					</PrivateRoute>
				}
			/>
		</Routes>
	);
}

export default Router;
