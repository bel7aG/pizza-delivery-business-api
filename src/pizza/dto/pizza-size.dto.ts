import { ObjectType, Field, ID, Float } from 'type-graphql';
import { IsIn } from 'class-validator';
import { PizzaSize } from '../enum/pizza-size.enum';

@ObjectType()
export class PizzaSizeDto {
  @Field()
  readonly size: string;

  @Field(() => Float)
  @IsIn([
    PizzaSize.PERSONAL,
    PizzaSize.SMALL,
    PizzaSize.MEDIUM,
    PizzaSize.LARGE,
    PizzaSize.XLARGE,
    PizzaSize.COLOSSAL,
  ])
  readonly price: number;
}
