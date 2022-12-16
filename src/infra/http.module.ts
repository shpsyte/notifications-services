import { Module } from '@nestjs/common';
import { SendNotifications } from '@/use-cases/send-notification';
import { DatabaseModule } from './database/database.module';
import { NotificationsController } from './http/controller/notifications.controller';
import { CancelNotifications } from '@/use-cases/cancel-notification';
import { CountRecipientNotificationss } from '@/use-cases/count-recipient-notification';
import { GetRecipientNotifications } from '@/use-cases/list-recipient-notification';
import { ReadNotifications } from '@/use-cases/read-notification';
import { UnReadNotifications } from '@/use-cases/unread-notification';
// import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotifications,
    CancelNotifications,
    ReadNotifications,
    UnReadNotifications,
    GetRecipientNotifications,
    CountRecipientNotificationss,
  ],
})
export class HttpModule {}
