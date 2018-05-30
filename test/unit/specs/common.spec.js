import 'src/common/common';

describe('Date', () => {
  test('Date.format', () => {
    const date = new Date('2018-05-16 14:30:08.600');
    expect(date.format('yyyyMMddhhmmss')).toBe('20180516143008');
    expect(date.format('yyyy-MM-dd hh:mm:ss.S')).toBe('2018-05-16 14:30:08.600');
    expect(date.format('yy-M-d h:m:s')).toBe('18-5-16 14:30:8');
    expect(date.format('yyyy-MM hh:mm')).toBe('2018-05 14:30');
    expect(date.format('ABCD123E')).toBe('ABCD123E');
  });
});
