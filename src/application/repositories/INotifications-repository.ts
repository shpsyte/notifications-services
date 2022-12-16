import { Notification } from '../Entities/notifications';

export abstract class INotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(id: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
  abstract countAllByRecipientId(recipientId: string): Promise<number>;
  abstract getAllByRecipientId(recipientId: string): Promise<Notification[]>;
}
