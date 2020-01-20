import { Document } from 'mongoose';
import { Order } from './../../order/interfaces/order.interface';

export interface User extends Document {
  id: string;
  username: string;
  email: string;
  name: string;
  surname: string;
  phone: string;
  address: string;
  orders: Order[];
  accessToken: string;
  userType: string;
  language?: string;
  currency: string;
}
