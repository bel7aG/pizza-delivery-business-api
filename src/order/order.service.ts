import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { OrderInput } from './inputs/order.input';
import { Order } from './interfaces/order.interface';
import { OrderDto } from './dto/order.dto';
import { UserService } from './../user/user.service';
import { User } from './../user/interfaces/user.interface';
import { UserType } from './../user/enum/user-type.enum';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('order') private readonly orderModel: Model<Order>,
    private userService: UserService,
  ) {}

  async orderPizza(input: OrderInput, currentUser: User) {
    let totalPrice = 0;

    if (currentUser && currentUser.userType === UserType.BOSS) {
      throw new UnauthorizedException(`${currentUser.name} you are the boss`);
    }

    input.pizzas.forEach(({ pizza: { sizes = [] }, quantity }) => {
      sizes.map(({ price, quantity }, index) => {
        totalPrice += price * quantity;
      });
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

  async findAll(currentUser: User): Promise<Order[]> {
    try {
      if (currentUser.userType === UserType.BOSS) {
        const orders = await this.orderModel.find().exec();
        return orders;
      }
    } catch {
      throw new NotFoundException();
    }
  }
}
