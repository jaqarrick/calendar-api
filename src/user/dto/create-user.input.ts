import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  username: string;
  @Field({ nullable: true })
  email: string;
  @Field()
  password: string;
}
