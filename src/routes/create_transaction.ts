import express from 'express';
import { Client } from '../entities/Client';
import {
	Transaction,
	TransactionType,
} from '../entities/Transaction';

const router = express.Router();

router.post(
	'/api/client/:clientId/transaction',
	async (req, res) => {
		const { clientId } = req.params;

		const { type, amount } = req.body;

		const client = await Client.findOne(
			parseInt(clientId)
		);

		if (!client) {
			return res.json({
				msg: 'client not found',
			});
		}

		const transaction = await Transaction.create({
			amount,
			type,
			client,
		});
		if (type === TransactionType.DEPOSIT)
			transaction.client.balance += amount
		else
			transaction.client.balance -= amount
		await transaction.save();

		return res.json(transaction);
	}
);

export { router as createTransactionRouter };
