import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { EventFrequency } from '../types/event.types';

@Entity()
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: false })
  name: string;

  @ManyToOne(() => User, (user) => user.events, { eager: true})
  user: User;

  @Column({ nullable: false, default: 'event description' })
  description: string;

  @Column({ nullable: true, default: null })
  frequency: EventFrequency;

  @Column({ nullable: true, default: null })
  date: Date;

  @Column('datetime', { name: 'created_at' })
  public createdAt: Date = new Date();

  @Column('datetime', { name: 'updated_at' })
  public updatedAt: Date = new Date();


}
