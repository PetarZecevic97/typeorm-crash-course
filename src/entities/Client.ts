import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
	ManyToMany,
	JoinTable,
	OneToOne,
	JoinColumn,
} from 'typeorm';
import { Address } from './Address';
import { Banker } from './Banker';
import { Transaction } from './Transaction';
import { Person } from './utils/Person';

@Entity('client')
export class Client extends Person {
	@Column({
		unique: true,
		length: 10,
	})
	card_number: string;

	@Column()
	balance: number;

	@Column({
		name: 'active',
		default: true,
	})
	is_active: boolean;

	@Column({
		type: 'simple-json',
		nullable: true,
	})
	additional_info: {
		age: number;
		hair_color: string;
	};

	@Column({ type: 'simple-array', default: [] })
	family_members: string[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@ManyToMany((type) => Banker, {
		cascade: true,
	})
	bankers: Banker[];

	@OneToMany(
		() => Transaction,
		(transaction) => transaction.client
	)
	transactions: Transaction[];

	@OneToOne(() => Address, {
		cascade: true,
	})
    @JoinColumn()
	address: Address;
}
