import { shallowMount, createLocalVue } from '@vue/test-utils';
import Others from '@/others/Others';

const Vue = createLocalVue();

describe('Others.spec.js', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Others, {
      localVue: Vue,
      stubs: ['router-link', 'router-view']
    });
  });

  test('show qrcode', () => {
    wrapper.setData({ show: true });
    expect(wrapper.find('.qrcode').isVisible()).toBe(true);
  });

  test('hide qrcode', () => {
    wrapper.setData({ show: false });
    expect(wrapper.find('.qrcode').isVisible()).toBe(false);
  });
});
