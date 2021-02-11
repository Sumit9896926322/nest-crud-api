import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger("bootstrap");
  const port = 3000;
  await app.listen(3000);

  logger.log(`App running on port ${port}`);
}
bootstrap();
