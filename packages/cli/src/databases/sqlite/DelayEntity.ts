import {
	ExecutionEntity,
} from '.';

import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	OneToOne,
	JoinColumn
} from 'typeorm';


@Entity()
export class DelayEntity  {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	executionId: string;

	@Column()
	endAt: Date;

	@Column()
	delayedNodes : string;
}
