import { Module } from '@nestjs/common';
import { INotificationsRepository } from 'src/application/repositories/INotifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: INotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [INotificationsRepository],
})
export class DatabaseModule {}
