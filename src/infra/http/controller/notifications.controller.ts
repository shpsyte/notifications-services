import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SendNotifications } from 'src/use-cases/send-notification';
// import { AppService } from './app.service';
import { CreateNotification } from '@/infra/dtos/create-notification';
import { NotificationViewModel } from './view-models/notifications-view';
import { CancelNotifications } from '@/use-cases/cancel-notification';
import { ReadNotifications } from '@/use-cases/read-notification';
import { UnReadNotifications } from '@/use-cases/unread-notification';
import { GetRecipientNotifications } from '@/use-cases/list-recipient-notification';
import { CountRecipientNotificationss } from '@/use-cases/count-recipient-notification';

@Controller('notification')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotifications,
    private cancelNotification: CancelNotifications,
    private readNotificatons: ReadNotifications,
    private unreadNotifications: UnReadNotifications,
    private getNotifications: GetRecipientNotifications,
    private countNotifications: CountRecipientNotificationss,
  ) {}
  @Get()
  get() {
    return 'this is a simple get';
  }

  @Post()
  async create(@Body() body: CreateNotification) {
    const { recipientId, content, category } = body;
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return NotificationViewModel.toHttp(notification);
  }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({ notificationId: id });
  }

  @Get(':id/count')
  async countFromRecipente(@Param('id') id: string) {
    const { count } = await this.countNotifications.execute({
      recipientId: id,
    });

    return { count };
  }

  @Get(':id/get-all')
  async getAllFromRecipente(@Param('id') id: string) {
    const { notifications } = await this.getNotifications.execute({
      recipientId: id,
    });

    return notifications.map(NotificationViewModel.toHttp);
  }

  @Patch(':id/mark-as-read')
  async markAsRead(@Param('id') id: string) {
    await this.readNotificatons.execute({ notificationId: id });
  }

  @Patch(':id/mark-as-unread')
  async markAsUnread(@Param('id') id: string) {
    await this.unreadNotifications.execute({ notificationId: id });
  }
}
