import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';
import { OrderInput } from './inputs/order.input';
import { CurrentUser } from '../user/get-user.decorator';
import { User } from './../user/interfaces/user.interface';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './../user/gql-authentication-guard';

@Resolver()
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => OrderDto)
  async orderPizza(
    @Args('input') input: OrderInput,
    @CurrentUser() currentUser: User,
  ) {
    return await this.orderService.orderPizza(input, currentUser);
  }
}
