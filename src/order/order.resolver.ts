import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';
import { OrderInput } from './inputs/order.input';
import { CurrentUser } from '../user/get-user.decorator';
import { User } from './../user/interfaces/user.interface';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './../user/gql-authentication-guard';
import { Order } from './interfaces/order.interface';

@Resolver()
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => OrderDto)
  async orderPizza(
    @Args('input') input: OrderInput,
    @CurrentUser() user: User,
  ) {
    return await this.orderService.orderPizza(input, user);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [OrderDto])
  async orders(@CurrentUser() user: User) {
    return this.orderService.findAll(user);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => OrderDto)
  async order(@Args('id') id: string, @CurrentUser() user: User) {
    return this.orderService.findOne(id, user);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => OrderDto)
  async updateOrderStatus(
    @Args('id') id: string,
    @Args('status') status: string,
    @CurrentUser() user: User,
  ): Promise<Order> {
    return this.orderService.updateStatus(id, status, user);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => OrderDto)
  async deleteOrder(
    @Args('id') id: string,
    @CurrentUser() user: User,
  ): Promise<Order> {
    return this.orderService.deleteOrder(id, user);
  }
}
