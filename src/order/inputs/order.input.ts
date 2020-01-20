import { InputType, Field, Int } from 'type-graphql';
import { User } from './../../user/interfaces/user.interface';
import { OrderPizzaInput } from './order-pizza.input';
import { SignUpInput } from './../../user/inputs/sign-up.input';
import { Pizza } from './../../pizza/interfaces/pizza.interface';

@InputType()
export class OrderInput {
  @Field(() => [OrderPizzaInput])
  readonly pizzas: [];

  @Field({ nullable: true })
  readonly phone?: string;

  @Field({ nullable: true })
  readonly name?: string;

  @Field({ nullable: true })
  readonly address?: string;
}
