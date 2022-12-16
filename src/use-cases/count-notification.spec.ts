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
    await notificationRepositoryInMemory.create(
      makeNotification({ recipientId: 'user-2' }),
    );

    const total = await notificationRepositoryInMemory.countAllByRecipientId(
      'user-1',
    );

    expect(total).toBe(2);
  });
});
