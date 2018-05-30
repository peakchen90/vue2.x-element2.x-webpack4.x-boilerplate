// https://facebook.github.io/jest/docs/en/expect.html

function type(obj) {
  return Object.prototype.toString.call(obj).slice(8).slice(0, -1);
}

// 通过 extend 可以将自己的匹配器添加到 Jest 中
// 只在本文件下有效
expect.extend({
  // 判断是否为一个指定类型的数组
  toBeArrayOfType(received, expected) {
    if (received instanceof Array) {
      const pass = received.every(item => type(item).toLowerCase() === expected.toLowerCase());
      return {
        message: () => `expected ${received} to be Array of ${expected}`,
        pass
      };
    }
    return {
      message: () => `expected ${received} is an Array`,
      pass: false
    };
  }
});

describe('expect.extend', () => {
  test('test number', () => {
    expect([-12, 0, 66, NaN]).toBeArrayOfType('Number');
  });

  test('test string', () => {
    expect(['abc', '213', 'null']).toBeArrayOfType('String');
  });

  test('test promise', () => {
    const mockFn = jest.fn();
    expect([new Promise(mockFn)]).toBeArrayOfType('Promise');
  });
});

