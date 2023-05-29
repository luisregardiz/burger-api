import { Module } from '@nestjs/common';
import { BurgersService } from './burgers.service';
import { BurgersController } from './burgers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Burger, BurgerSchema } from './schema/burgers.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Burger.name, schema: BurgerSchema }]),
  ],
  controllers: [BurgersController],
  providers: [BurgersService],
})
export class BurgersModule {}
