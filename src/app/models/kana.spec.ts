import { Kana } from './kana';

describe('Kana', () => {
  it('should create an instance', () => {
    const kana = {romanji: 'a', hiragana: 'b', katakana: 'c'} as Kana;
    expect(kana.romanji).toEqual('a');
    expect(kana.hiragana).toEqual('b');
    expect(kana.katakana).toEqual('c');
  });
});
