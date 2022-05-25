import express, { Request, Response } from 'express';
import User from '../models/User';
const route = express.Router();

route.get('/login', (req, res) => {
	res.send('hello');
});
route.post('/login', async (req: Request, res: Response) => {
	const { username, password } = req.body;
	console.log(username, password);
	// const userExist = await User.findOne({ username: username.toLowerCase() });
	// if (userExist) {
	// 	return;
	// }
	const newUser = new User({
		username: username.toLowerCase(),
		password,
	});
	try {
		await newUser.save();
		res.status(200).send({ newUser });
	} catch (error) {
		res.status(400).send({ error });
	}
});

export default route;
