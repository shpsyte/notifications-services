import { Content } from './content';

describe('Content', () => {
  it('should be able tp create notification contet', () => {
    const content = new Content('this is a contente');

    expect(content).toBeTruthy();
  });

  it('shoudnt bea blet to create a notification with less the 5 character', () => {
    expect(() => new Content('less')).toThrowError();
  });

  it('shoudnt bea blet to create a notification with more the 255 character', () => {
    expect(() => new Content('a'.repeat(300))).toThrowError();
  });
});
