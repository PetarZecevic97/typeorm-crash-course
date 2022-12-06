import express from 'express';
import { createQueryBuilder } from 'typeorm';
import { Client } from '../entities/Client';

const router = express.Router();

router.get('/api/clients', async (req, res) => {

	const clients = await createQueryBuilder(
		'client'
	)
		.select('client.first_name')
		.from(Client, 'client')
		.leftJoinAndSelect(
			'client.transactions',
			'transaction'
		)
		.where('client.id = :clientId', {
			clientId: 1,
		})
		.getOne();

	//const clients = await Client.find()

	return res.json(clients);
});

export { router as fetchClientsRouter };
