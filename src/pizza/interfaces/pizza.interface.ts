import { Document } from 'mongoose';

export interface Pizza extends Document {
  id: string;
  name: string;
  description: string;
  size: string;
  price: string;
  ingredients: string[];
  pictures: string[];
}
