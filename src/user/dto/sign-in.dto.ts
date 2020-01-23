import { ObjectType, Field, ID } from 'type-graphql';
import { IsIn } from 'class-validator';
import { CurrencyType } from '../enum/currency-type.enum';
import { AccessTokenDto } from './access-token.dto';
import { UserAddressDto } from './user-address.dto';
import { UserAddress } from './../interfaces/user-address.interface';

@ObjectType()
export class SignInDto {
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

  @Field(() => AccessTokenDto)
  readonly accessToken: string;

  @Field()
  readonly userType: string;

  @Field({ nullable: true })
  readonly language: string;

  @Field()
  @IsIn([CurrencyType.EUR, CurrencyType.USD])
  readonly currency: string;
}
