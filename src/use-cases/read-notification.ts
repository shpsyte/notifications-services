import { INotificationsRepository } from './../application/repositories/INotifications-repository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './error/notification-notfound-error';

type ReadNotificationProps = {
  notificationId;
};

type ReadNotificationResponse = void;
@Injectable()
export class ReadNotifications {
  constructor(
    private readonly notificationsRepository: INotificationsRepository,
  ) {}
  async execute(
    request: ReadNotificationProps,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.read();

    await this.notificationsRepository.save(notification);
  }
}
