import express, { Request, Response } from 'express';
import User from '../models/User';
const route = express.Router();

route.get('/', async (req: Request, res: Response) => {
	const users = await User.find();
	res.status(200).send({ msg: 'Users list', users });
});

route.post('/login', async (req: Request, res: Response) => {
	const { username, password } = req.body;
	const userExist = await User.findOne({ username: username.toLowerCase() });
	if (userExist) {
		return res.status(400).send({
			msg: 'User already exist',
			username: userExist.username,
		});
	}
	const newUser = new User({
		username: username.toLowerCase(),
		password,
	});
	try {
		await newUser.save();
		res.status(200).send({ msg: 'User Created', username: newUser.username });
	} catch (error) {
		res.status(400).send({ error });
	}
});

export default route;
