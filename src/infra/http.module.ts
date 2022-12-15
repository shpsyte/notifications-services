import { Module } from '@nestjs/common';
import { SendNotifications } from 'src/use-cases/send-notifications';
import { DatabaseModule } from './database/database.module';
import { NotificationsController } from './http/controller/notifications.controller';
// import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotifications],
})
export class HttpModule {}
