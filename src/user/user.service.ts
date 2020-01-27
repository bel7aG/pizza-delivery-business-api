import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt/bcrypt';
import { SignUpInput } from './inputs/sign-up.input';
import { SignInInput } from './inputs/sign-in.input';
import { Order } from './../order/interfaces/order.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async validateUser(payload: JwtPayload) {
    return await this.userModel.findOne({
      email: payload.email,
    });
  }

  async signUp(signUpInput: SignUpInput): Promise<User> {
    try {
      const user = new this.userModel(signUpInput);
      user.salt = await bcrypt.genSalt();
      user.password = await this.hashPassword(user.password, user.salt);

      return await user.save();
    } catch {
      throw new ConflictException(`Email already registered`);
    }
  }

  async signIn(signInInput: SignInInput): Promise<any> {
    const userDetails = await this.validationUserPassword(signInInput);
    if (userDetails) {
      const { email } = userDetails;

      const payload: JwtPayload = {
        email,
      };

      const token = await this.jwtService.sign(payload);
      const accessTokenDecoder = this.jwtService.decode(token);

      // to milliseconds
      const exp = JSON.parse(JSON.stringify(accessTokenDecoder)).exp * 1000;

      userDetails.accessToken = {
        type: 'bearer',
        token,
        exp,
      };

      return userDetails;
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  async validationUserPassword(signInput: SignInInput): Promise<User> {
    const { email, password } = signInput;

    const credentials = {
      email: email.toLowerCase(),
    };

    const user = await this.userModel.findOne({ ...credentials });

    if (user && (await this.validatePassword(password, user))) {
      return user;
    } else {
      return null;
    }
  }

  async validatePassword(password: string, user): Promise<boolean> {
    const hash = await bcrypt.hash(password, user.salt);
    return hash === user.password;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return await bcrypt.hash(password, salt);
  }
}
