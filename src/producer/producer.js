import { Kafka } from 'kafkajs';
import { randomUUID } from 'node:crypto';

async function bootstrap() {
  const kafka = new Kafka({
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
  });

  const producer = kafka.producer();
  await producer.connect();

  const topic = 'notifications.send-notifications';
  const message = {
    content: 'This is a test message',
    category: 'test',
    recipientId: randomUUID(),
  };

  const message2 = {
    content: 'This is a test message 2',
    category: 'test',
    recipientId: randomUUID(),
  };

  await producer.send({
    topic,
    messages: [
      { value: JSON.stringify(message) },
      { value: JSON.stringify(message2) },
    ],
  });

  await producer.disconnect();
}
