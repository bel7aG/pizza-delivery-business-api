import { ObjectType, Field, ID } from 'type-graphql';
import { OrderPizzaDto } from './../../order/dto/order-pizza.dto';
import { Order } from './../../order/interfaces/order.interface';
import { OrderDto } from './../../order/dto/order.dto';
import { IsIn } from 'class-validator';
import { CurrencyType } from '../enum/currency-type.enum';

@ObjectType()
export class SignInDto {
  @Field(() => ID)
  readonly id?: string;

  @Field()
  readonly name: string;

  @Field()
  readonly surname: string;

  @Field()
  readonly email: string;

  @Field()
  readonly username: string;

  @Field()
  readonly phone: string;

  @Field()
  readonly address: string;

  @Field()
  readonly password: string;

  @Field()
  readonly salt: string;

  @Field(() => [OrderDto])
  readonly orders: Order[];

  @Field()
  readonly accessToken: string;

  @Field()
  readonly userType: string;

  @Field({ nullable: true })
  readonly language: string;

  @Field()
  @IsIn([CurrencyType.EUR, CurrencyType.USD])
  readonly currency: string;
}
