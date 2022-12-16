import { INotificationsRepository } from './../application/repositories/INotifications-repository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './error/notification-notfound-error';

type UnReadNotificationProps = {
  notificationId;
};

type UnReadNotificationResponse = void;
@Injectable()
export class UnReadNotifications {
  constructor(
    private readonly notificationsRepository: INotificationsRepository,
  ) {}
  async execute(
    request: UnReadNotificationProps,
  ): Promise<UnReadNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationsRepository.save(notification);
  }
}
