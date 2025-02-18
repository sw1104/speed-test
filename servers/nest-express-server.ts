import { Controller, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';

@Controller()
class AppController {
  @Get()
  getHello() {
    return 'Hello from NestJS + Express!';
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3003);
  console.log('3003');
}
bootstrap();
