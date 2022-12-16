import { OnModuleDestroy } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KaftaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['top-monitor-6103-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dG9wLW1vbml0b3ItNjEwMyQltaQv1vpwEkgxqOamVaRAf741S8iHEr-YA5iazkQ',
          password:
            'lxrT9mDDfqI-QyUR3YGexEv5hTQGeMlbKOjsN2IIuy2VurjbIX1wWwLhWx6S_MszgnaZBw==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    this.close();
  }
}
