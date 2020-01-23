import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserSchema } from './schemas/user.schema';
import { UserResolver } from './user.resolver';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: 'abc',
      signOptions: {
        expiresIn: 3600000,
      },
    }),

    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
        collection: 'users',
      },
    ]),
  ],
  providers: [UserService, JwtStrategy, UserResolver],
  exports: [JwtStrategy, PassportModule, UserService],
})
export class UserModule {}
