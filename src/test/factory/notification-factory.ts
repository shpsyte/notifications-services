import {
  Notification,
  NotificationProps,
} from '@/application/Entities/notifications';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}): Notification {
  return new Notification({
    category: 'this is the category',
    content: 'this is a content',
    recipientId: 'user-id-1234-5',
    ...override,
  });
}
