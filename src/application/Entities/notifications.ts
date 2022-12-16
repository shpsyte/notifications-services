import { Replace } from 'src/helpers/Replace';
import { randomUUID } from 'crypto';

export type NotificationProps = {
  content: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
  recipientId: string;
  canceledAt?: Date | null;
};
export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ? id : randomUUID();
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

  get readAt(): Date | null | undefined {
    return this.props.readAt;
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

  get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }
}
