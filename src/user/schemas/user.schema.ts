import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  name: String,
  surname: String,
  phone: String,
  address: String,
  password: String,
  salt: { type: String, required: false },
  orders: [],
  accessToken: String,
  userType: String,
  language: { type: String, required: false },
  currency: String,
});
