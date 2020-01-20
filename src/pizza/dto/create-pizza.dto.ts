import { ObjectType, Field, ID, Float } from 'type-graphql';
import { CurrencyType } from '../../user/enum/currency-type.enum';
import { IsIn } from 'class-validator';

@ObjectType()
export class CreatePizzaDto {
  @Field(() => ID, { nullable: true })
  readonly id?: string;

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
