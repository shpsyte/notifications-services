import { InMemoryNotificationRepository } from '../test/repositories/in-memory-repository';
import { makeNotification } from '@/test/factory/notification-factory';
import { ReadNotifications } from './read-notification';
import { UnReadNotifications } from './unread-notification';

describe('Read Notification', () => {
  it('it shoube able to read notificaid', async () => {
    const notificationRepositoryInMemory = new InMemoryNotificationRepository();
    const unreadNotifications = new UnReadNotifications(
      notificationRepositoryInMemory,
    );

    const notification = makeNotification({ readAt: new Date() });

    await notificationRepositoryInMemory.create(notification);

    await unreadNotifications.execute({
      notificationId: notification.id,
    });

    expect(notificationRepositoryInMemory.notifications[0].readAt).toEqual(
      null,
    );
  });

  it('it should be exception when notification not found', async () => {
    const notificationRepositoryInMemory = new InMemoryNotificationRepository();
    const readNotifications = new ReadNotifications(
      notificationRepositoryInMemory,
    );

    await expect(
      readNotifications.execute({
        notificationId: 'notification.id',
      }),
    ).rejects.toThrow();
  });
});
