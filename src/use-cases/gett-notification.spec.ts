import { InMemoryNotificationRepository } from '../test/repositories/in-memory-repository';
import { makeNotification } from '@/test/factory/notification-factory';

describe('Count Notification', () => {
  it('it shoube able to send cunt notificaid', async () => {
    const notificationRepositoryInMemory = new InMemoryNotificationRepository();

    await notificationRepositoryInMemory.create(
      makeNotification({ recipientId: 'user-1' }),
    );
    await notificationRepositoryInMemory.create(
      makeNotification({ recipientId: 'user-1' }),
    );

    const notifications =
      await notificationRepositoryInMemory.getAllByRecipientId('user-1');

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'user-1' }),
        expect.objectContaining({ recipientId: 'user-1' }),
      ]),
    );
  });
});
