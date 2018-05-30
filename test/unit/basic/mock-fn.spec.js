// https://facebook.github.io/jest/docs/en/mock-function-api.html

// 通过 jest.fn() 创建一个模拟方法

describe('mockFn test', () => {
  // 返回模拟方法名称
  test('mockFn.getMockName()', () => {
    const mockFn = jest.fn().mockName('foo');
    expect(mockFn.getMockName()).toBe('foo');
  });

  // 返回函数调用参数的引用
  test('mockFn.mock.calls', () => {
    const mockFn = jest.fn();
    // 调用 2 次
    mockFn('foo');
    mockFn('bar', 123);
    expect(mockFn.mock.calls).toEqual([['foo'], ['bar', 123]]);
  });

  // 返回函数通过 `new` 实例化的引用
  test('mockFn.mock.instances', () => {
    const mockFn = jest.fn();
    // 实例化 2 次
    const a = new mockFn();
    const b = new mockFn();
    expect(mockFn.mock.instances[0]).toBe(a);
    expect(mockFn.mock.instances[1]).toBe(b);
  });

  // 清除之前保存的 mockFn.mock.calls 和 mockFn.mock.instances
  test('mockFn.mockClear()', () => {
    const mockFn = jest.fn();
    mockFn('foo');
    const a = new mockFn();
    expect(mockFn.mock.calls[0]).toEqual(['foo']);
    expect(mockFn.mock.instances[1]).toBe(a);

    // clear
    // mockFn.mock.calls 和 mockFn.mock.instances 的值为 []
    mockFn.mockClear();
    expect(mockFn.mock.calls).toEqual([]);
    expect(mockFn.mock.instances).toEqual([]);
  });

  // 重置 mockFn, 包括保存在 mock 里的数据，mock实现方法，mock方法名称
  test('mockFn.mockReset()', () => {
    const mockFn = jest
      .fn(arg => arg * (-1))
      .mockName('hello'); // mockName 方法为 mockFn 提供一个方法名
    const a = mockFn(20);
    const b = new mockFn();

    expect(mockFn.getMockName()).toBe('hello');
    expect(a).toBe(-20);
    expect(mockFn.mock.calls[0]).toEqual([20]);
    expect(mockFn.mock.instances[1]).toBe(b);

    // clear
    mockFn.mockReset();
    expect(mockFn.getMockName()).toBe('jest.fn()'); // 默认 mockName 是 'jest.fn()'
    expect(mockFn.mock.calls).toEqual([]); // 默认 mock.calls 是 []
    expect(mockFn.mock.instances).toEqual([]); // 默认 mock.instances 是 []

    // 测试清除实现方法
    const c = mockFn(20);
    expect(c).toBeUndefined();
  });

  // 移除 mock ，还原初始实现
  test('mockFn.mockRestore()', () => {
  });

  // 提供一个 mock函数的实现方法
  test('mockFn.mockImplementation(fn)', () => {
    const mockFn = jest.fn().mockImplementation(arg => arg * (-1));
    // 也可以写成: jest.fn(arg => arg * (-1))

    const a = mockFn(20);
    expect(a).toBe(-20);

    // TODO: 模拟类的构造函数
  });

  // 提供一个只会被调用一次的 mock函数的实现方法
  test('mockFn.mockImplementationOnce(fn)', () => {
    const mockFn = jest
      .fn()
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => 'foo');

    const a = mockFn();
    const b = mockFn();
    const c = mockFn();
    expect(a).toBeTruthy();
    expect(b).toBe('foo');
    expect(c).toBeUndefined();
  });

  // 模拟返回 `this` 的一个语法糖
  test('mockFn.mockReturnThis()', () => {
  });

  // 模拟返回指定值的一个语法糖
  test('mockFn.mockReturnValue(value)', () => {
    const mockFn = jest.fn().mockReturnValue('foo');
    const a = mockFn();
    expect(a).toBe('foo');
  });

  // 模拟返回指定值的一个语法糖（只会被调用一次），类似于 mockFn.mockImplementationOnce
  test('mockFn.mockReturnValueOnce(value)', () => {
    const mockFn = jest
      .fn()
      .mockReturnValue('foo')
      .mockReturnValueOnce(123)
      .mockReturnValueOnce(false);
    const a = mockFn();
    const b = mockFn();
    const c = mockFn();
    expect(a).toBe(123);
    expect(b).toBeFalsy();
    expect(c).toBe('foo');
  });

  // 返回 Promise.resolve(value)
  test('mockFn.mockResolvedValue(value)', async () => {
    const mockFn = jest.fn().mockResolvedValue('foo');
    const a = await mockFn();
    expect(a).toBe('foo');
  });

  // 返回 Promise.resolve(value) (只会被调用一次)，类似于 mockFn.mockImplementationOnce
  test('mockFn.mockResolvedValueOnce(value)', async () => {
    const mockFn = jest
      .fn()
      .mockResolvedValue('foo')
      .mockResolvedValueOnce('bar');
    const a = await mockFn();
    const b = await mockFn();
    expect(a).toBe('bar');
    expect(b).toBe('foo');
  });

  // 返回 Promise.reject(value)
  test('mockFn.mockRejectedValue(value)', async () => {
    const mockFn = jest.fn().mockRejectedValue('error info');
    try {
      await mockFn();
    } catch (e) {
      // e = 'error info'
    }
  });

  // 返回 Promise.reject(value) (只会被调用一次)，类似于 mockFn.mockImplementationOnce
  test('mockFn.mockRejectedValueOnce(value)', async () => {
  });
});
