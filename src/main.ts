import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Burger API')
    .setDescription('This is a Burger API to test your app')
    .setVersion('1.0')
    .addTag('burgers')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  const PORT = process.env.PORT || 4000;
  await app.listen(PORT);
}
bootstrap();
