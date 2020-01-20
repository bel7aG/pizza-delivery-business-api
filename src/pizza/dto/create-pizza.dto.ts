import { ObjectType, Field, ID, Float } from 'type-graphql';
import { IsIn } from 'class-validator';
import { PizzaSize } from '../enum/pizza-size.enum';

@ObjectType()
export class CreatePizzaDto {
  @Field(() => ID, { nullable: true })
  readonly id?: string;

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
