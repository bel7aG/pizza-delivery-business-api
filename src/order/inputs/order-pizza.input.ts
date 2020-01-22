import { InputType, Field, Int } from 'type-graphql';
import { User } from '../../user/interfaces/user.interface';
import { Pizza } from '../../pizza/interfaces/pizza.interface';
import { SignInDto } from '../../user/dto/sign-in.dto';
import { CreatePizzaDto } from '../../pizza/dto/create-pizza.dto';
import { PizzaInput } from '../../pizza/inputs/pizza.input';

@InputType()
export class OrderPizzaInput {
  @Field(() => PizzaInput)
  readonly pizza: Pizza;
}
