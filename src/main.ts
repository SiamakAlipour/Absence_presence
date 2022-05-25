import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { students_info } from './input';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();
const app = express();

app.use(express.json());
// app.use(express.urlencoded());
app.use(cors());
app.use('/api/auth', routes.authRoute);

app.get('/', (req, res) => {
	res.send('test');
});

mongoose.connect(process.env.DB || '', () => {
	console.log(`connected to db`);
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
	console.log(`server running on ${PORT}`);
});
