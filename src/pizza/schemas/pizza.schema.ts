import * as mongoose from 'mongoose';
import { Upload } from './../interfaces/upload.interface';
import { CurrencyType } from 'src/user/enum/currency-type.enum';

const PizzaSize = new mongoose.Schema({
  size: String,
  price: Number,
});

export const PizzaSchema = new mongoose.Schema({
  name: String,
  description: String,
  sizes: [PizzaSize],
  ingredients: [String],
  pictures: [String],
  currency: String,
});
