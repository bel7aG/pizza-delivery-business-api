import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignUpInput } from './inputs/sign-up.input';
import { SignInDto } from './dto/sign-in.dto';
import { SignInInput } from './inputs/sign-in.input';
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Mutation(() => SignUpDto)
  async signUp(@Args('input') input: SignUpInput) {
    return this.userService.signUp(input);
  }

  @UsePipes(ValidationPipe)
  @Mutation(() => SignInDto)
  async signIn(@Args('input') input: SignInInput) {
    return this.userService.signIn(input);
  }

  @Query(() => [SignInDto])
  async users() {
    return this.userService.findAll();
  }
}
