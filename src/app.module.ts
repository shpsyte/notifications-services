import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ISCOServices } from './Mail/isco.service';
import { IMailService } from './Mail/mail.service';
import { PrismaService } from './prisma.service';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: IMailService,
      useClass: ISCOServices,
    },
  ],
})
export class AppModule {}
