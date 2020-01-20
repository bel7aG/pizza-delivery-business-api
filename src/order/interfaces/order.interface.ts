import { Document } from 'mongoose';
import { User } from './../../user/interfaces/user.interface';
import { Pizza } from './../../pizza/interfaces/pizza.interface';

export interface Order extends Document {
  pizzas: Pizza[];

  user: User;

  phone: string;

  name: string;

  address: string;

  totalPrice: number;
}
