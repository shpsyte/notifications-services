import { Notification } from 'src/application/Entities/notifications';
import { INotificationsRepository } from 'src/application/repositories/INotifications-repository';

export class InMemoryNotificationRepository
  implements INotificationsRepository
{
  public notifications: Notification[] = [];
  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
  async findById(id: string): Promise<Notification | null> {
    const notification = this.notifications.find((notification) => {
      return notification.id === id;
    });
    if (!notification) {
      return null;
    }
    return notification;
  }
  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
  async countAllByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter((item) => item.recipientId === recipientId)
      .length;
  }

  async getAllByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter(
      (item) => item.recipientId === recipientId,
    );
  }
}
