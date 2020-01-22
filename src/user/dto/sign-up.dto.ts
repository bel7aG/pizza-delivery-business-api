import { ObjectType, Field, ID } from 'type-graphql';
import { IsIn } from 'class-validator';
import { CurrencyType } from '../enum/currency-type.enum';
import { UserAddress } from './../interfaces/user-address.interface';
import { UserAddressDto } from './user-address.dto';

@ObjectType()
export class SignUpDto {
  @Field(() => ID)
  readonly id?: string;

  @Field()
  readonly name: string;

  @Field()
  readonly surname: string;

  @Field()
  readonly email: string;

  @Field()
  readonly phone: string;

  @Field(() => UserAddressDto)
  readonly address: UserAddress;

  @Field()
  readonly password: string;

  @Field()
  readonly userType: string;

  @Field()
  @IsIn([CurrencyType.EUR, CurrencyType.USD])
  readonly currency: string;
}
