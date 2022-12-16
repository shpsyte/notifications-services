import { InMemoryNotificationRepository } from '../test/repositories/in-memory-repository';
import { makeNotification } from '@/test/factory/notification-factory';
import { ReadNotifications } from './read-notification';

describe('Read Notification', () => {
  it('it shoube able to read notificaid', async () => {
    const notificationRepositoryInMemory = new InMemoryNotificationRepository();
    const readNotifications = new ReadNotifications(
      notificationRepositoryInMemory,
    );

    const notification = makeNotification();

    await notificationRepositoryInMemory.create(notification);

    await readNotifications.execute({
      notificationId: notification.id,
    });

    expect(notificationRepositoryInMemory.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });
});
