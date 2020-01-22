import { InputType, Field, Float } from 'type-graphql';
import { PizzaSizeInput } from './pizza-size.input';
import { PizzaSizeType } from './../interfaces/pizza-size.interface';

@InputType()
export class PizzaInput {
  @Field()
  readonly name: string;

  @Field()
  readonly description: string;

  @Field(() => [PizzaSizeInput])
  readonly sizes: PizzaSizeType[];

  @Field(() => [String])
  readonly ingredients: string[];

  @Field(() => [String])
  readonly pictures: string[];
}
