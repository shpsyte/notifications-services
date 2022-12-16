import { SendNotifications } from '@/use-cases/send-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface Notification {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotifications) {}
  @EventPattern('notifications.send-notifications')
  async handleSendNotification(
    @Payload() { category, content, recipientId }: Notification,
  ) {
    console.log('Received notification', recipientId);
    await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });
  }
}
