import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
	ManyToMany,
	JoinTable,
    BaseEntity,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { Banker } from './Banker';
import { Client } from './Client';
import { Transaction } from './Transaction';
import { Person } from './utils/Person';

@Entity('address')
export class Address extends BaseEntity {
    @PrimaryGeneratedColumn()
	id: number;
    
	@Column()
	city: string;
	
	@Column()
	country: string;

	@Column()
	street: string;

	@Column()
	street_number: number;
}
