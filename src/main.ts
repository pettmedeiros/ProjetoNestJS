import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LogInterceptor } from './interceptors/log.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // serve para validar os DTOs

  //app.useGlobalInterceptors(new LogInterceptor); // intercepta todos e calcula o tempo gasto 

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
