export class Content {
  private readonly content: string;

  constructor(content: string) {
    const isContentInValid = !this.validateContent(content);
    if (isContentInValid) {
      throw new Error('Content is invalid');
    }
    this.content = content;
  }

  private validateContent(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  get Value(): string {
    return this.content;
  }
}
