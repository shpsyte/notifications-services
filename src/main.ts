import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { KaftaConsumerService } from './infra/messaging/kafta/kafta-consumer.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const KaftaConsumerServices = app.get(KaftaConsumerService);
  app.connectMicroservice<MicroserviceOptions>({
    strategy: KaftaConsumerServices,
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
