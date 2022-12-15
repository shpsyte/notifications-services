import { Notification } from 'src/application/Entities/notifications';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';

export class InMemoryNotificationRepository implements NotificationsRepository {
  public notifications: Notification[] = [];
  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}
