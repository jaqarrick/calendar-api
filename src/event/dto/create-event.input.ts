import { InputType, Field } from '@nestjs/graphql';
import { EventFrequency } from '../types/event.types';

@InputType()
export class CreateEventInput {
  @Field()
  name: string

  @Field({nullable: true})
  frequency?: EventFrequency

  @Field()
  date: Date

  @Field()
  description: string
}
