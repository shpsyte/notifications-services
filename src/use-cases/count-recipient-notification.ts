import { INotificationsRepository } from './../application/repositories/INotifications-repository';
import { Injectable } from '@nestjs/common';

type CountRecipientNotificationsProps = {
  recipientId;
};

type CountRecipientNotificationsResponse = {
  count: number;
};
@Injectable()
export class CountRecipientNotificationss {
  constructor(
    private readonly notificationsRepository: INotificationsRepository,
  ) {}
  async execute(
    request: CountRecipientNotificationsProps,
  ): Promise<CountRecipientNotificationsResponse> {
    const { recipientId } = request;
    const count = await this.notificationsRepository.countAllByRecipientId(
      recipientId,
    );

    return { count };
  }
}
