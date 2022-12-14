import { Body, Controller, Get, Post } from '@nestjs/common';
// import { AppService } from './app.service';
import { IMailService } from './Mail/mail.service';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotification } from './create-notification';

@Controller('notification')
export class AppController {
  constructor(
    private readonly mailServices: IMailService,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  list() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotification) {
    const { recipientId, content, category } = body;
    const notification = await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        createdAt: new Date(),
        category,
        content,
        recipientId,
      },
    });
    return notification;
  }
}
