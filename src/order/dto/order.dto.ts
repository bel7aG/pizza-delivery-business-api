import { ObjectType, Field, ID, Int, Float } from 'type-graphql';
import { User } from './../../user/interfaces/user.interface';
import { UserDto } from './../../user/dto/user.dto';
import { UserAddress } from './../../user/interfaces/user-address.interface';
import { UserAddressDto } from './../../user/dto/user-address.dto';
import { CreatePizzaDto } from './../../pizza/dto/create-pizza.dto';

@ObjectType()
export class OrderDto {
  @Field(() => ID, { nullable: true })
  readonly id?: string;

  @Field(() => String)
  readonly ticket: string;

  @Field(() => [CreatePizzaDto])
  readonly pizzas: [];

  @Field(() => UserDto, { nullable: true })
  readonly user: User;

  @Field({ nullable: true })
  readonly phone: string;

  @Field({ nullable: true })
  readonly name: string;

  @Field(() => UserAddressDto, { nullable: true })
  readonly address: UserAddress;

  @Field(() => String)
  readonly currency: string;

  @Field({ nullable: true })
  readonly totalPrice: number;

  @Field()
  readonly status: string;

  @Field()
  readonly created: string;
}
