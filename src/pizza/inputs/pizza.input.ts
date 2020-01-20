import { InputType, Field, Float } from 'type-graphql';
import { IsIn } from 'class-validator';
import { PizzaSize } from '../enum/pizza-size.enum';

@InputType()
export class PizzaInput {
  @Field()
  readonly name: string;

  @Field()
  readonly description: string;

  @Field()
  @IsIn([
    PizzaSize.PERSONAL,
    PizzaSize.SMALL,
    PizzaSize.MEDIUM,
    PizzaSize.LARGE,
    PizzaSize.XLARGE,
    PizzaSize.COLOSSAL,
  ])
  readonly size: string;

  @Field(() => Float)
  readonly price: number;

  @Field(() => [String])
  readonly ingredients: string[];

  @Field(() => [String])
  readonly pictures: string[];
}
