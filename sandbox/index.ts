import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('car', {
		make: 'toyota',
		color: 'red',
		model: null || ''
	});

	const car = await client.hGetAll('car');
	console.log(car);
};
run();
