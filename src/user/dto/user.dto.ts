import { ObjectType, Field, ID } from 'type-graphql';
import { UserAddress } from './../interfaces/user-address.interface';
import { UserAddressDto } from './user-address.dto';

@ObjectType()
export class UserDto {
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
  readonly userType: string;

  @Field({ nullable: true })
  readonly language: string;

  @Field()
  readonly currency: string;
}
