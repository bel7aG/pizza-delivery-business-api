import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Pizza } from './interfaces/pizza.interface';
import { PizzaInput } from './inputs/pizza.input';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UserType } from '../user/enum/user-type.enum';
import { User } from './../user/interfaces/user.interface';
import { CurrencyType } from '../user/enum/currency-type.enum';
import { EUR_TO_USD_RATE } from './../constants';

@Injectable()
export class PizzaService {
  constructor(
    @InjectModel('pizza') private readonly pizzaModel: Model<Pizza>,
  ) {}

  async createPizza(pizzaInput: PizzaInput, user: User): Promise<Pizza> {
    try {
      if (user.userType === UserType.BOSS) {
        const pizza = new this.pizzaModel(pizzaInput);
        return await pizza.save();
      }
    } catch {
      throw new UnauthorizedException(
        'you are not the Owner. STOP IT I got your IP!',
      );
    }
  }

  async findAll(currentUser: User, search: string): Promise<Pizza[]> {
    let pizzas = null;
    if (search) {
      // case sensitivity will be in the Front.
      pizzas = await this.pizzaModel
        .find({ name: { $regex: '.*' + search + '.*' } })
        .exec();
    } else {
      pizzas = await this.pizzaModel.find().exec();
    }

    if (currentUser && currentUser.currency === CurrencyType.USD) {
      pizzas.forEach(({ price }, index) => {
        pizzas[index].price = this.euroToUSD(price);
      });
    }

    return pizzas;
  }

  async findOne(id: string, currentUser: User): Promise<Pizza> {
    try {
      const chosenPizza = await this.pizzaModel.findOne({ _id: id });
      if (currentUser && currentUser.currency === CurrencyType.USD) {
        chosenPizza.price = this.euroToUSD(chosenPizza.price);
      }
      return chosenPizza;
    } catch {
      throw new NotFoundException(`Pizza not found.`);
    }
  }

  async deletePizza(id: string): Promise<Pizza> {
    try {
      const chosenPizza = await this.pizzaModel.findByIdAndRemove(id);
      return chosenPizza;
    } catch {
      throw new NotFoundException(`Pizza not found.`);
    }
  }

  async updatePizza(
    id: string,
    pizza: CreatePizzaDto,
  ): Promise<CreatePizzaDto> {
    try {
      const chosenPizza = await this.pizzaModel.findByIdAndUpdate(id, pizza, {
        new: true,
      });
      return chosenPizza;
    } catch {
      throw new NotFoundException(`Pizza not found.`);
    }
  }

  euroToUSD(price) {
    return (price += price * EUR_TO_USD_RATE).toFixed(2);
  }
}
