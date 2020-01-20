import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  pizzas: [],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  phone: String,
  name: String,
  address: String,
  totalPrice: Number,
});
