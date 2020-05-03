import hello from './hello';

describe('hello', () => {
  it('returns hello world', () => {
    expect(hello('  world ')).toBe('Hello,   WORLD !');
  })
})
