import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Event } from 'src/event/entities/event.object';

@ObjectType()
export class User {
  @Field()
  username: string;
  @Field({ nullable: true })
  email: string;
  @Field()
  uuid: string;
  @Field(() => [Event])
  events: Event[]
}
