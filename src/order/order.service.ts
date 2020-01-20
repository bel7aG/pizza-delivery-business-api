import { Injectable, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { OrderInput } from './inputs/order.input';
import { Order } from './interfaces/order.interface';
import { OrderDto } from './dto/order.dto';
import { UserService } from './../user/user.service';
import { User } from './../user/interfaces/user.interface';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('order') private readonly orderModel: Model<Order>,
    private userService: UserService,
  ) {}

  async orderPizza(input: OrderInput, currentUser: User) {
    let totalPrice = 0;

    input.pizzas.forEach(({ pizza: { price }, quantity }) => {
      totalPrice += price * quantity;
    });

    const order = new this.orderModel({
      ...input,
      totalPrice,
      user: currentUser,
    });
    const saveOrder = await order.save();

    if (currentUser) {
      this.userService.addPizzaOrderRef(currentUser, saveOrder);
    }

    return saveOrder;
  }

  async addOrderRefToUser(userId: string, orderId: string) {}
}
