import { ObjectType, Field, ID, Int } from 'type-graphql';
import { User } from './../../user/interfaces/user.interface';
import { Pizza } from './../../pizza/interfaces/pizza.interface';
import { SignInDto } from './../../user/dto/sign-in.dto';
import { CreatePizzaDto } from './../../pizza/dto/create-pizza.dto';

@ObjectType()
export class OrderPizzaDto {
  @Field(() => CreatePizzaDto)
  readonly pizza: Pizza;
}
