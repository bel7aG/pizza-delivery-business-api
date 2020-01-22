import * as mongoose from 'mongoose';
import { UserSchema } from './../../user/schemas/user.schema';

export const OrderSchema = new mongoose.Schema({
  pizzas: [],
  user: UserSchema,
  phone: String,
  name: String,
  address: String,
  totalPrice: Number,
});
