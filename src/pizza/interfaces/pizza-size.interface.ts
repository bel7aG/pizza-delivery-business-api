import { Document } from 'mongoose';

export interface PizzaSizeType extends Document {
  size: string;
  price: number;
}
