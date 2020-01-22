import { InputType, Field, ID, ObjectType } from 'type-graphql';
import { MinLength, IsEmail, IsNumber, IsNotEmpty } from 'class-validator';

@ObjectType()
export class UserAddressDto {
  @Field({ nullable: true })
  @IsNotEmpty()
  readonly city: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  readonly addressLine: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  readonly region: string;

  @Field({ nullable: true })
  @IsNumber()
  readonly zipCode: number;
}
