import { INotificationsRepository } from './../application/repositories/INotifications-repository';
import { Injectable } from '@nestjs/common';
import { Notification } from '@/application/Entities/notifications';

type GetRecipientNotificationsProps = {
  recipientId;
};

type GetRecipientNotificationsResponse = {
  notifications: Notification[];
};
@Injectable()
export class GetRecipientNotifications {
  constructor(
    private readonly notificationsRepository: INotificationsRepository,
  ) {}
  async execute(
    request: GetRecipientNotificationsProps,
  ): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;
    const notifications =
      await this.notificationsRepository.getAllByRecipientId(recipientId);

    return { notifications };
  }
}
