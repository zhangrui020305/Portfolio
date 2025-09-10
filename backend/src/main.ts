import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,  // 允许这个前端地址
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
