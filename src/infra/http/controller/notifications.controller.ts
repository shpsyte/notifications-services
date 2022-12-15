import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendNotifications } from 'src/use-cases/send-notifications';
// import { AppService } from './app.service';
import { CreateNotification } from '../../dtos/create-notification';

@Controller('notification')
export class NotificationsController {
  constructor(private sendNotification: SendNotifications) {}
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

    return notification;
  }
}
