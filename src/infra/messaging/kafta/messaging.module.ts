import { DatabaseModule } from '@/infra/database/database.module';
import { SendNotifications } from '@/use-cases/send-notification';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { KaftaConsumerService } from './kafta-consumer.service';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [KaftaConsumerService, SendNotifications],
})
export class MessagingModule {}
