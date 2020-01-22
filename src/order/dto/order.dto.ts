import { ObjectType, Field, ID, Int } from 'type-graphql';
import { User } from './../../user/interfaces/user.interface';
import { Pizza } from './../../pizza/interfaces/pizza.interface';
import { SignInDto } from './../../user/dto/sign-in.dto';
import { CreatePizzaDto } from './../../pizza/dto/create-pizza.dto';
import { OrderPizzaDto } from './order-pizza.dto';
import { UserDto } from './../../user/dto/user.dto';
import { UserAddress } from './../../user/interfaces/user-address.interface';
import { UserAddressDto } from './../../user/dto/user-address.dto';

@ObjectType()
export class OrderDto {
  @Field(() => ID)
  readonly id?: string;

  @Field(() => [OrderPizzaDto])
  readonly pizzas: [];

  @Field(() => UserDto, { nullable: true })
  readonly user: User;

  @Field({ nullable: true })
  readonly phone: string;

  @Field({ nullable: true })
  readonly name: string;

  @Field(() => UserAddressDto)
  readonly address: UserAddress;

  @Field({ nullable: true })
  readonly totalPrice: number;
}
