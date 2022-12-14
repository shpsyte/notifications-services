import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotification {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 255)
  content: string;

  @IsNotEmpty()
  category: string;

  constructor(recipientId: string, content: string, category: string) {
    this.recipientId = recipientId;
    this.content = content;
    this.category = category;
  }
}
