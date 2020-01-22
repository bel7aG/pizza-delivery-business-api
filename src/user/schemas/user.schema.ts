import * as mongoose from 'mongoose';

const accessToken = new mongoose.Schema({
  type: String,
  token: String,
  exp: Number,
});

const addressSchema = new mongoose.Schema({
  city: String,
  addressLine: String,
  region: String,
  zipCode: Number,
});

export const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  name: String,
  surname: String,
  phone: String,
  address: addressSchema,
  password: String,
  salt: { type: String, required: false },
  orders: [],
  accessToken,
  userType: String,
  language: { type: String, required: false },
  currency: String,
});
