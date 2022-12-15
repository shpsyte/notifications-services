import { Notification } from '../Entities/notifications';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
