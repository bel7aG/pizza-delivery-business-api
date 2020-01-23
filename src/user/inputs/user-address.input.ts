import { InputType, Field, ID, Int } from 'type-graphql';
import { MinLength, IsEmail, IsNumber, IsNotEmpty } from 'class-validator';

@InputType()
export class UserAddressInput {
  @Field()
  @IsNotEmpty()
  readonly city: string;

  @Field()
  @IsNotEmpty()
  readonly addressLine: string;

  @Field()
  @IsNotEmpty()
  readonly region: string;

  @Field(() => Int)
  @IsNumber()
  readonly zipCode: number;
}
