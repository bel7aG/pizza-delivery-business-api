import { Document } from 'mongoose';
import { PizzaSizeType } from './pizza-size.interface';

export interface Pizza extends Document {
  id: string;
  name: string;
  description: string;
  sizes: PizzaSizeType[];
  price: string;
  ingredients: string[];
  pictures: string[];
}
