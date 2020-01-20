import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { PizzaInput } from './inputs/pizza.input';
import { Pizza } from './interfaces/pizza.interface';
import { GqlAuthGuard } from '../user/gql-authentication-guard';
import { User } from './../user/interfaces/user.interface';
import { CurrentUser } from './../user/get-user.decorator';

@Resolver()
export class PizzaResolver {
  constructor(private readonly pizzaService: PizzaService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => CreatePizzaDto)
  async manyPizza(@Args('id') id: string, @CurrentUser() user: User) {
    // return this.pizzaService.findMany(id, user);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [CreatePizzaDto])
  async pizzas(@CurrentUser() currentUser: User) {
    return this.pizzaService.findAll(currentUser);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => CreatePizzaDto)
  async pizza(@Args('id') id: string, @CurrentUser() user: User) {
    return this.pizzaService.findOne(id, user);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => CreatePizzaDto)
  async createPizza(
    @Args('input') input: PizzaInput,
    @CurrentUser() user: User,
  ) {
    return this.pizzaService.createPizza(input, user);
  }

  @Mutation(() => CreatePizzaDto)
  async updatePizza(
    @Args('id') id: string,
    @Args('input') input: PizzaInput,
  ): Promise<PizzaInput> {
    return this.pizzaService.updatePizza(id, input);
  }

  @Mutation(() => CreatePizzaDto)
  async deletePizza(@Args('id') id: string): Promise<Pizza> {
    return this.pizzaService.deletePizza(id);
  }
}
