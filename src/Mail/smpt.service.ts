import { Injectable } from '@nestjs/common';
import { IMailService } from './mail.service';

@Injectable()
export class SMTPServices implements IMailService {
  getMailServices(): string {
    return 'SMTP Services';
  }
}
