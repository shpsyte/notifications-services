import { Injectable } from '@nestjs/common';
import { IMailService } from './mail.service';

@Injectable()
export class ISCOServices implements IMailService {
  getMailServices(): string {
    return 'ISCO Services';
  }
}
