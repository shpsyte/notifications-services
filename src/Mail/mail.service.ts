// import { Inject } from '@nestjs/common';

// export interface IMailService {
//   getMailServices(): string;
// }

export abstract class IMailService {
  abstract getMailServices(): string;
}
