import { INotificationsRepository } from './../application/repositories/INotifications-repository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './error/notification-notfound-error';

type CancelNotificationProps = {
  notificationId;
};

type CancelNotificationResponse = void;
@Injectable()
export class CancelNotifications {
  constructor(
    private readonly notificationsRepository: INotificationsRepository,
  ) {}
  async execute(
    request: CancelNotificationProps,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
