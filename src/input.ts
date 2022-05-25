import fs from 'fs';
import path from 'path';

const input = fs
	.readFileSync(path.join(__dirname, './test.txt'), {
		encoding: 'utf-8',
	})
	.split('\n')
	.map((line: string) => line);

export const students_info = input.map((student: string) => student.split(' '));
