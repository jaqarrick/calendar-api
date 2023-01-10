import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.object';
import { EventFrequency } from '../types/event.types';

@ObjectType()
export class Event {
  @Field()
  uuid: string

  @Field()
  name: string

  @Field(() => User)
  user: User

  @Field({nullable: true})
  frequency?: EventFrequency

  @Field()
  description: string

  @Field()
  date: Date
}
