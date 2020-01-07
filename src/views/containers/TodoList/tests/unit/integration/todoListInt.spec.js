import {
  mount
} from '@vue/test-utils';
import TodoList from '@/views/containers/TodoList/TodoList.vue';
import {
  findDomByWrapper
} from '../../../../../../utils/testUtils';
import store from '@/store/index.js'

// mount是深渲染，渲染组件树
it(`1.用户在header输入框输入内容。2.用户会点击回车按钮。3.列表项应增加用户输入内容`, () => {
  const wrapper = mount(TodoList)
  const inputElem = findDomByWrapper(wrapper, '[data-test="input"]').at(0)
  const content = 'testValue'
  inputElem.setValue(content)
  inputElem.trigger('change')
  inputElem.trigger('keyup.enter')
  const listItem = findDomByWrapper(wrapper, '[data-test="itemCon"]')
  expect(listItem.length).toBe(1)
  expect(listItem.at(0).text()).toContain(content)
})
// 带vuex的验证
it(`1.用户在header输入框输入内容。2.用户会点击回车按钮。3.列表项应增加用户输入内容`, () => {
  const wrapper = mount(TodoList, {
    store
  })
  const inputElem = findDomByWrapper(wrapper, '[data-test="input"]').at(0)
  const content = 'testValue'
  inputElem.setValue(content)
  inputElem.trigger('change')
  inputElem.trigger('keyup.enter')
  const listItem = findDomByWrapper(wrapper, '[data-test="itemCon"]')
  expect(listItem.length).toBe(1)
  expect(listItem.at(0).text()).toContain(content)
})
