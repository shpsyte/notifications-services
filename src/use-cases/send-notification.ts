import { INotificationsRepository } from './../application/repositories/INotifications-repository';
import { Notification } from './../application/Entities/notifications';
import { Injectable } from '@nestjs/common';

type SendNotificationProps = {
  recipientId: string;
  content: string;
  category: string;
};

type SendNotificationResponse = {
  notification: Notification;
};
@Injectable()
export class SendNotifications {
  constructor(
    private readonly notificationsRepository: INotificationsRepository,
  ) {}
  async execute(
    request: SendNotificationProps,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;
    const notification = new Notification({
      category,
      content,
      recipientId,
    });

    // console.log('notification', notification);
    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
