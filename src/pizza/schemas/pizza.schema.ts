import * as mongoose from 'mongoose';
import { Upload } from './../interfaces/upload.interface';
import { CurrencyType } from 'src/user/enum/currency-type.enum';

export const PizzaSchema = new mongoose.Schema({
  name: String,
  description: String,
  size: String,
  price: Number,
  ingredients: [String],
  pictures: [String],
  currency: String,
});
