import * as mongoose from 'mongoose';
import { addressSchema } from './../../user/schemas/user.schema';
import { OrderStatus } from '../enum/order-status.enum';
import { CurrencyType } from '../../user/enum/currency-type.enum';

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
  currency: { type: String, enum: [CurrencyType.EUR, CurrencyType.USD] },
  created: { type: Date, default: Date.now },
});
