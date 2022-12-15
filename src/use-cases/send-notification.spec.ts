import { SendNotifications } from './send-notifications';
import { InMemoryNotificationRepository } from '../../test/repositories/in-memory-repository';

describe('Send Notification', () => {
  it('it shoube able to send notificaid', async () => {
    const notificationRepositoryInMemory = new InMemoryNotificationRepository();
    const sendNotification = new SendNotifications(
      notificationRepositoryInMemory,
    );

    const { notification } = await sendNotification.execute({
      content: 'this is a content',
      category: 'this is the category',
      recipientId: 'user-id-1234',
    });
    expect(notificationRepositoryInMemory.notifications).toHaveLength(1);
    expect(notificationRepositoryInMemory.notifications[0]).toEqual(
      notification,
    );
  });
});
