import {
  shallowMount
} from '@vue/test-utils';
import Header from '@/views/containers/TodoList/components/Header.vue';
import {
  findDomByWrapper
} from '../../../../../utils/testUtils';

it('Header 包含 input 框', () => {
  const wrapper = shallowMount(Header);
  const input = findDomByWrapper(wrapper, '[data-test="input"]')
  expect(input.exists()).toBe(true); // 希望input这个元素存在（true）
});

it('Header 包含 input 框初始内容为空', () => {
  const wrapper = shallowMount(Header);
  const inputValue = wrapper.vm.$data.inputValue // 找到  wrapper.$vm. this实例
  expect(inputValue).toBe(''); // 希望inputValue 值为空
});

it('input 框变化，数据应该跟着变化', () => {
  const testVal = 'testVal'
  const wrapper = shallowMount(Header);
  const input = findDomByWrapper(wrapper, '[data-test="input"]')
  input.setValue(testVal)
  const inputValue = wrapper.vm.$data.inputValue
  expect(inputValue).toBe(testVal);
});

it('input 中 回车，无内容，无反应', () => {
  const testVal = ''
  const wrapper = shallowMount(Header);
  const input = findDomByWrapper(wrapper, '[data-test="input"]')
  input.setValue(testVal)
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeFalsy(); // input空的时候回车，不应该触发添加事件
});

it('input 中 回车，有内容，触发add', () => {
  const testVal = 'testVal'
  const wrapper = shallowMount(Header);
  const input = findDomByWrapper(wrapper, '[data-test="input"]')
  input.setValue(testVal)
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeTruthy(); // input有值的时候回车，应该触发添加事件
});

it('input 中 回车，有内容，触发add，清空input值', () => {
  const testVal = 'testVal'
  const wrapper = shallowMount(Header);
  const input = findDomByWrapper(wrapper, '[data-test="input"]')
  input.setValue(testVal)
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeTruthy();
  expect(wrapper.vm.$data.inputValue).toBe('');
});

it('header 样式发生改变，做提示', () => {
  const wrapper = shallowMount(Header);
  expect(wrapper).toMatchSnapshot(); // 保存快照，保证UI不发生变化 //更新快照：w ,u
});
