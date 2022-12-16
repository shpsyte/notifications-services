import { Notification } from '@/application/Entities/notifications';
import { Notification as RawNotifications } from '@prisma/client';

export class NotificationMapper {
  static toDomain(raw: RawNotifications): Notification {
    return new Notification(
      {
        category: raw.category,
        content: raw.content,
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
}
