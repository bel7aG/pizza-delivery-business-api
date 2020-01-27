import { ObjectType, Field, ID, Float, Int } from 'type-graphql';
import { IsIn } from 'class-validator';
import { PizzaSize } from '../enum/pizza-size.enum';

@ObjectType()
export class PizzaSizeDto {
  @Field(() => ID)
  readonly id?: string;

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

  @Field(() => Int!, { nullable: true })
  readonly quantity: number;
}
