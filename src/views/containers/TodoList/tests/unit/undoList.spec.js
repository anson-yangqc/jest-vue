import {
  shallowMount
} from '@vue/test-utils';
import UndoList from '@/views/containers/TodoList/components/UndoList.vue';
import {
  findDomByWrapper
} from '../../../../../utils/testUtils';

it('UndoList 参数为空 count为0，且无内容', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: []
    }
  });
  const countElem = findDomByWrapper(wrapper, '[data-test="count"]')
  const listItems = findDomByWrapper(wrapper, '[data-test="item"]')
  expect(countElem.at(0).text()).toContain('0')
  expect(listItems.length).toEqual(0)
});

it('UndoList 参数为[1,2,3] count为3，且列表有内容，且存在删除按钮', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [1, 2, 3]
    }
  });
  const countElem = findDomByWrapper(wrapper, '[data-test="count"]')
  const listItems = findDomByWrapper(wrapper, '[data-test="item"]')
  const deleteButton = findDomByWrapper(wrapper, '[data-test="delete-button"]')
  expect(countElem.at(0).text()).toContain('3')
  expect(listItems.length).toEqual(3)
  expect(deleteButton.length).toEqual(3)
});

it('UndoList删除按钮被点击，触发删除事件', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [1, 2, 3]
    }
  });
  const deleteButton = findDomByWrapper(wrapper, '[data-test="delete-button"]').at(1) // 下标从0开始
  deleteButton.trigger('click')
  expect(wrapper.emitted().handleDel).toBeTruthy();
});
