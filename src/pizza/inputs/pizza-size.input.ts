import { InputType, Field, Float, Int } from 'type-graphql';
import { IsIn } from 'class-validator';
import { PizzaSize } from '../enum/pizza-size.enum';

@InputType()
export class PizzaSizeInput {
  @Field()
  @IsIn([
    PizzaSize.PERSONAL,
    PizzaSize.SMALL,
    PizzaSize.MEDIUM,
    PizzaSize.LARGE,
    PizzaSize.XLARGE,
    PizzaSize.COLOSSAL,
  ])
  readonly size: PizzaSize;

  @Field(() => Float)
  readonly price: number;

  @Field(() => Int, { nullable: true })
  readonly quantity: number;
}
