// https://facebook.github.io/jest/docs/en/api.html

test('basic test', () => {
  expect(1 + 2).toBe(3);
});

// 将多个相关的测试组合在一个 "测试套件" 中
describe('basic describe', () => {
  test('basic test 1', () => {
    expect(2 + 3).toBe(5);
  });

  test('basic test 2', () => {
    expect(!!undefined).toBeFalsy();
  });
});

// 所有测试执行完成后执行
afterAll(() => {
  // console.log('===================== run all test suites =====================');
});

// 测试执行前执行
beforeAll(() => {
  // console.log('===================== start run test suites =====================');
});

// 跳过一组测试，一般用于注释
// test.skip 用法类似
describe('will be skipped', () => {
  test('basic test 3', () => {
    expect(2 + 3).toBe(5);
  });
});

// 只会执行这个测试组
// test.only 用法类似
/**
 * describe.only('only run the test', () => {
 *   ...
 * });
 */
