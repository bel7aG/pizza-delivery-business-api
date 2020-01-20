import { InputType, Field, Float } from 'type-graphql';

@InputType()
export class PizzaInput {
  @Field()
  readonly name: string;

  @Field()
  readonly description: string;

  @Field()
  readonly size: string;

  @Field(() => Float)
  readonly price: number;

  @Field(() => [String])
  readonly ingredients: string[];

  @Field(() => [String])
  readonly pictures: string[];
}
