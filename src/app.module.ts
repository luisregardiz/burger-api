import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
import { BurgersModule } from './burgers/burgers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env', '.env'],
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
    BurgersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
