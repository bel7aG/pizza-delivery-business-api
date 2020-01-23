import { InputType, Field } from 'type-graphql';
import { IsIn } from 'class-validator';
import { OrderStatus } from '../enum/order-status.enum';
import { UserAddress } from './../../user/interfaces/user-address.interface';
import { UserAddressInput } from './../../user/inputs/user-address.input';
import { PizzaInput } from './../../pizza/inputs/pizza.input';

@InputType()
export class OrderInput {
  @Field(() => [PizzaInput])
  readonly pizzas: [];

  @Field({ nullable: true })
  readonly phone?: string;

  @Field({ nullable: true })
  readonly name?: string;

  @Field(() => UserAddressInput, { nullable: true })
  readonly address?: UserAddress;

  @Field()
  @IsIn([OrderStatus.IN_REVIEW, OrderStatus.IN_PROGRESS, OrderStatus.DONE])
  readonly status: string;
}
