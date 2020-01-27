import { Document } from 'mongoose';
import { User } from './../../user/interfaces/user.interface';
import { Pizza } from './../../pizza/interfaces/pizza.interface';
import { UserAddress } from './../../user/interfaces/user-address.interface';

export interface Order extends Document {
  pizzas: Pizza[];

  user: User;

  phone: string;

  name: string;

  address: UserAddress;

  totalPrice: number;

  status: string;

  currency: string;

  created: string;
}
