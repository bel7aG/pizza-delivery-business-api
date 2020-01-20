import { InputType, Field, ID } from 'type-graphql';
import {
  MinLength,
  IsNotEmpty,
  IsNumberString,
  IsEmail,
  IsIn,
} from 'class-validator';
import { UserType } from '../enum/user-type.enum';
import { CurrencyType } from '../enum/currency-type.enum';

@InputType()
export class SignUpInput {
  @Field()
  @IsNotEmpty()
  readonly name: string;

  @Field()
  @IsNotEmpty()
  readonly surname: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @Field()
  @IsNotEmpty()
  readonly username: string;

  @Field()
  @IsNotEmpty()
  @IsNumberString()
  readonly phone: string;

  @Field()
  @MinLength(12, {
    message: 'Short address',
  })
  readonly address: string;

  @Field()
  @MinLength(8, {
    message: 'Short password',
  })
  password: string;

  @Field()
  readonly userType?: string;

  @Field()
  @IsIn([CurrencyType.EUR, CurrencyType.USD])
  readonly currency: string;

  @Field({ nullable: true })
  readonly language?: string;
}
