import { Module } from '@nestjs/common';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzaModule } from './pizza/pizza.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://bel7aG:belhassen123@cleverenv-zsr5e.mongodb.net/pizza-delivery-business?retryWrites=true&w=majority',
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schemas.gql',
      context: ({ req }) => ({ req }),
      cors: {
        origin: '*',
        preflightContinue: true,
        optionsSuccessStatus: 204,
        credentials: true,
      },
      path: '/',
    }),
    PizzaModule,
    OrderModule,
    UserModule,
  ],
})
export class AppModule {}
