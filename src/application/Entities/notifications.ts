import { Replace } from 'src/helpers/Replace';
import { randomUUID } from 'crypto';

export type NotificationProps = {
  content: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
  recipientId: string;
};
export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  get id() {
    return this._id;
  }

  // create getters and setter for each property
  get content() {
    return this.props.content;
  }
  set content(content: string) {
    this.props.content = content;
  }

  get category() {
    return this.props.category;
  }
  set category(category: string) {
    this.props.category = category;
  }

  get readAt() {
    return this.props.readAt;
  }

  set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get recipientId() {
    return this.props.recipientId;
  }

  set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }
}
