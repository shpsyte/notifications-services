import { Injectable } from '@nestjs/common';
import { INotificationsRepository } from 'src/application/repositories/INotifications-repository';
import { Notification } from '../../../../application/Entities/notifications';
import { NotificationMapper } from '../../mappers/notifications-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements INotificationsRepository {
  constructor(private prisma: PrismaService) {}

  async countAllByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prisma.notification.count({
      where: {
        recipientId,
      },
    });

    return count;
  }

  async getAllByRecipientId(recipientId: string): Promise<Notification[]> {
    const notification = await this.prisma.notification.findMany({
      where: {
        recipientId,
      },
    });

    return notification.map(NotificationMapper.toDomain);
  }

  async create(notification: Notification): Promise<void> {
    const data = NotificationMapper.toPrisma(notification);
    await this.prisma.notification.create({
      data,
    });
  }

  async save(notification: Notification): Promise<void> {
    const raw = NotificationMapper.toPrisma(notification);
    await this.prisma.notification.update({
      where: {
        id: notification.id,
      },
      data: raw,
    });
  }

  async findById(id: string): Promise<Notification | null> {
    const notification = await this.prisma.notification.findUnique({
      where: {
        id,
      },
    });

    if (!notification) {
      return null;
    }
    return NotificationMapper.toDomain(notification);
  }
}
