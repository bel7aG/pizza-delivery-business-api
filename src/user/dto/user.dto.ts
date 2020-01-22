import { ObjectType, Field, ID } from 'type-graphql';
import { UserAddress } from './../interfaces/user-address.interface';
import { UserAddressDto } from './user-address.dto';

@ObjectType()
export class UserDto {
  @Field(() => ID, { nullable: true })
  readonly id?: string;

  @Field({ nullable: true })
  readonly name: string;

  @Field({ nullable: true })
  readonly surname: string;

  @Field({ nullable: true })
  readonly email: string;

  @Field({ nullable: true })
  readonly phone: string;

  @Field(() => UserAddressDto, { nullable: true })
  readonly address: UserAddress;

  @Field({ nullable: true })
  readonly userType: string;

  @Field({ nullable: true })
  readonly language: string;

  @Field({ nullable: true })
  readonly currency: string;
}
