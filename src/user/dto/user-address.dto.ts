import { InputType, Field, ID, ObjectType } from 'type-graphql';
import { MinLength, IsEmail, IsNumber, IsNotEmpty } from 'class-validator';

@ObjectType()
export class UserAddressDto {
  @Field()
  @IsNotEmpty()
  readonly city: string;

  @Field()
  @IsNotEmpty()
  readonly addressLine: string;

  @Field()
  @IsNotEmpty()
  readonly region: string;

  @Field()
  @IsNumber()
  readonly zipCode: number;
}
