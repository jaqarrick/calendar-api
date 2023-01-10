import { Event } from 'src/event/entities/event.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
  OneToMany,
  JoinColumn,
  BaseEntity,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true})
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ nullable: true, default: null })
  email: string;

  @Column()
  hashedPassword: string;

  @OneToMany(() => Event, (event) => event.user, {nullable: true})
  events?: Event[];

  @Column('datetime', { name: 'created_at' })
  public createdAt: Date = new Date();

  @Column('datetime', { name: 'updated_at' })
  public updatedAt: Date = new Date();
}
