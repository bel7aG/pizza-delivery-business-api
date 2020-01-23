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
import { UserAddressInput } from './user-address.input';
import { UserAddress } from '../interfaces/user-address.interface';

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
  @IsNumberString()
  readonly phone: string;

  @Field(() => UserAddressInput)
  readonly address: any;

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
