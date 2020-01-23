import { Document } from 'mongoose';
import { Order } from './../../order/interfaces/order.interface';
import { UserAddress } from './user-address.interface';

export interface User extends Document {
  id: string;
  email: string;
  name: string;
  surname: string;
  phone: string;
  address: UserAddress;
  accessToken: any;
  userType: string;
  language?: string;
  currency: string;
}
