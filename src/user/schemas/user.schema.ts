import * as mongoose from 'mongoose';
import { UserType } from '../enum/user-type.enum';

const accessToken = new mongoose.Schema({
  type: String,
  token: String,
  exp: Number,
});

export const addressSchema = new mongoose.Schema({
  city: String,
  addressLine: String,
  region: String,
  zipCode: Number,
});

export const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true, dropDups: true },
  name: String,
  surname: String,
  phone: String,
  address: addressSchema,
  password: String,
  salt: { type: String, required: false },
  accessToken,
  userType: { type: String, enum: [UserType.BOSS, UserType.CUSTOMER] },
  language: { type: String, required: false },
  currency: String,
});
