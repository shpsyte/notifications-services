import { CancelNotifications } from './cancel-notification';
import { InMemoryNotificationRepository } from '../test/repositories/in-memory-repository';
import { Notification } from '@/application/Entities/notifications';
import { NotificationNotFound } from './error/notification-notfound-error';
import { makeNotification } from '@/test/factory/notification-factory';

describe('Cancel Notification', () => {
  it('it shoube able to send notificaid', async () => {
    const notificationRepositoryInMemory = new InMemoryNotificationRepository();
    const cancelNotifications = new CancelNotifications(
      notificationRepositoryInMemory,
    );

    const notification = makeNotification();

    await notificationRepositoryInMemory.create(notification);

    await cancelNotifications.execute({
      notificationId: notification.id,
    });

    expect(notificationRepositoryInMemory.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('it should not be able to cancel a notification that does not exist', async () => {
    const notificationRepositoryInMemory = new InMemoryNotificationRepository();
    const cancelNotifications = new CancelNotifications(
      notificationRepositoryInMemory,
    );

    await expect(
      cancelNotifications.execute({
        notificationId: 'notification-id-1234',
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
