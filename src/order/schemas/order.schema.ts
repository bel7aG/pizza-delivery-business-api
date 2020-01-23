import * as mongoose from 'mongoose';
import { UserSchema, addressSchema } from './../../user/schemas/user.schema';
import { OrderStatus } from '../enum/order-status.enum';

export const OrderSchema = new mongoose.Schema({
  pizzas: [],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  phone: String,
  name: String,
  address: addressSchema,
  totalPrice: Number,
  status: {
    type: String,
    enum: [
      OrderStatus.IN_REVIEW,
      OrderStatus.IN_PROGRESS,
      OrderStatus.DONE,
      OrderStatus.REJECTED,
      OrderStatus.CANCELED,
    ],
  },
  created: { type: Date, default: Date.now },
});
