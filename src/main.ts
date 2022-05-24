import { RenderCallback } from './../node_modules/express-handlebars/types/index.d';
import fs from 'fs';
import path from 'path';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { engine } from 'express-handlebars';

import routes from './routes';

const app = express();

app.set('views', path.join(__dirname, 'views/'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.json());
// app.use(cors());
app.use('/api/auth', routes.authRoute);

app.get('/', (req: Request, res: Response) => {
	res.render('home');
});

const input = fs
	.readFileSync(path.join(__dirname, './test.txt'), {
		encoding: 'utf-8',
	})
	.split('\n')
	.map((line) => line);

const students_info = input.map((student) => student.split(' '));
console.log(students_info);

const PORT = 8001 || process.env.PORT;
app.listen(PORT);
