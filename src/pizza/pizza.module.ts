import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzaService } from './pizza.service';
import { PizzaSchema } from './schemas/pizza.schema';
import { PizzaResolver } from './pizza.resolver';
import { UserModule } from './../user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'pizza',
        schema: PizzaSchema,
        collection: 'pizzas',
      },
    ]),
    UserModule,
  ],
  providers: [PizzaService, PizzaResolver],
})
export class PizzaModule {}
