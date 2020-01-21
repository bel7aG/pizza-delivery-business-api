import { ObjectType, Field, ID } from 'type-graphql';
import { OrderPizzaDto } from './../../order/dto/order-pizza.dto';
import { Order } from './../../order/interfaces/order.interface';
import { OrderDto } from './../../order/dto/order.dto';
import { IsIn } from 'class-validator';
import { CurrencyType } from '../enum/currency-type.enum';

@ObjectType()
export class AccessTokenDto {
  @Field()
  readonly type: string;

  @Field()
  readonly token: string;

  @Field()
  readonly exp: number;
}
