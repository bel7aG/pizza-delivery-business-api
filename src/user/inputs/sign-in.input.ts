import { InputType, Field, ID } from 'type-graphql';
import { MinLength, IsEmail } from 'class-validator';

@InputType()
export class SignInInput {
  @Field()
  @IsEmail()
  readonly email: string;

  @Field()
  @MinLength(8, {
    message: 'Short password',
  })
  readonly password: string;
}
