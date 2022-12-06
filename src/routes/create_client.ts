import express from 'express';
import { Address } from '../entities/Address';
import { Transaction, TransactionType } from '../entities/Transaction';
import { Client } from '../entities/Client';

const router = express.Router();

router.post('/api/client', async (req, res) => {
	const {
		firstName,
		lastName,
		email,
		cardNumber,
		balance,
		city,
		country,
		street,
		streetNumber
	} = req.body;

	const address = Address.create({
		city,
		country,
		street,
		street_number: streetNumber
	})

	const client = Client.create({
		first_name: firstName,
		last_name: lastName,
		email,
		card_number: cardNumber,
		balance,
		address
	});
	await client.save();

	return res.json(client);
});

export { router as createClientRouter };
