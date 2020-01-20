import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './../user/user.module';
import { OrderService } from './order.service';
import { OrderSchema } from './schemas/order.schema';
import { OrderResolver } from './order.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'order',
        schema: OrderSchema,
        collection: 'orders',
      },
    ]),
    UserModule,
  ],
  providers: [OrderService, OrderResolver],
})
export class OrderModule {}
