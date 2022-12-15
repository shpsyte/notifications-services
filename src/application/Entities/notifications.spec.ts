import { Notification } from './notifications';

describe('Notification', () => {
  it('should be able tpo create a valid notification', () => {
    const notification = new Notification({
      content: 'this is a content',
      category: 'category',
      recipientId: 'recipientId',
    });

    expect(notification).toBeTruthy();
  });

  it('should be able to create a notification with createdAt', () => {
    const notification = new Notification({
      content: 'this is a content',
      category: 'category',
      createdAt: new Date(),
      recipientId: 'recipientId',
    });

    expect(notification).toBeTruthy();
  });
});
