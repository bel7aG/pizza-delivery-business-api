import { ObjectType, Field, ID, Float } from 'type-graphql';
import { IsIn } from 'class-validator';
import { PizzaSize } from '../enum/pizza-size.enum';
import { PizzaSizeDto } from './pizza-size.dto';
import { PizzaSizeType } from './../interfaces/pizza-size.interface';

@ObjectType()
export class CreatePizzaDto {
  @Field(() => ID)
  readonly id?: string;

  @Field()
  readonly name: string;

  @Field()
  readonly description: string;

  @Field(() => [PizzaSizeDto])
  readonly sizes: PizzaSizeType[];

  @Field(() => [String])
  readonly ingredients: string[];

  @Field(() => [String])
  readonly pictures: string[];
}
