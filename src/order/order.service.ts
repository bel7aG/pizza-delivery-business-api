import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
  ForbiddenException,
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
    @InjectModel('Order') private readonly orderModel: Model<Order>,
    private userService: UserService,
  ) {}

  async orderPizza(input: OrderInput, user: User) {
    let totalPrice = 0;

    if (user && user.userType === UserType.BOSS) {
      throw new UnauthorizedException(`${user.name} you are the boss`);
    }

    const { name, address, phone } = input;

    const eligibleOrder = (name && address && phone) || user;
    if (eligibleOrder) {
      input.pizzas.forEach(({ sizes = [] }) => {
        sizes.map(({ price, quantity }) => {
          totalPrice += price * quantity;
        });
      });

      const order = new this.orderModel({
        ...input,
        totalPrice,
        user,
      });

      const saveOrder = await order.save();

      return saveOrder;
    } else {
      throw new ForbiddenException(`missing data.`);
    }
  }

  async findAll(user: User): Promise<Order[]> {
    try {
      if (user) {
        if (user.userType === UserType.BOSS) {
          const orders = await this.orderModel
            .find()
            .populate('user')
            .exec();
          return orders;
        } else {
          const orders = await this.orderModel
            .find({ user })
            .populate('user')
            .exec();
          return orders;
        }
      } else {
        throw new NotFoundException();
      }
    } catch {
      throw new NotFoundException();
    }
  }

  async updateStatus(id: string, status: string, user: User): Promise<Order> {
    if (user && user.userType === UserType.BOSS) {
      try {
        const chosenOrder = await this.orderModel
          .findByIdAndUpdate(
            id,
            {
              $set: {
                status,
              },
            },
            {
              new: true,
            },
          )
          .populate('user');

        return chosenOrder;
      } catch {
        throw new NotFoundException(`Order not found.`);
      }
    } else {
      throw new UnauthorizedException(`You don't have the permission.`);
    }
  }

  async deleteOrder(id: string, user: User): Promise<Order> {
    if (user && user.userType === UserType.BOSS) {
      try {
        const chosenOrder = await this.orderModel.findByIdAndRemove(id);
        return chosenOrder;
      } catch {
        throw new NotFoundException(`Order not found.`);
      }
    } else {
      throw new UnauthorizedException(`You don't have the permission.`);
    }
  }
}
