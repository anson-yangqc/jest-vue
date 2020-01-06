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
it('UndoList 有一个编辑状态的场景，获取input的值', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [{
        status: 'div',
        value: 1
      }, {
        status: 'input',
        value: 2
      }, {
        status: 'div',
        value: 3
      }]
    }
  });
  const input = findDomByWrapper(wrapper, '[data-test="input"]')
  expect(input.at(0).element.value).toBe('2')
  expect(input.length).toBe(1)
});
it('输入框失去焦点时，向外触发 reset 事件', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [{
        status: 'div',
        value: 1
      }, {
        status: 'input',
        value: 2
      }, {
        status: 'div',
        value: 3
      }]
    }
  });
  const inputElement = findDomByWrapper(wrapper, '[data-test="input"]').at(0)
  inputElement.trigger('blur')
  expect(wrapper.emitted().reset).toBeTruthy()
  // todo怎判断？？//可以在todolist再写个vm.$data判断
  // expect(wrapper.vm.parent.data.list).toEqual([{
  //   status: 'div',
  //   value: 1
  // }, {
  //   status: 'div',
  //   value: 2
  // }, {
  //   status: 'div',
  //   value: 3
  // }])
});
it('UndoList 参数为[] count为3，且列表有内容，且存在删除按钮', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [{
        status: 'div',
        value: 1
      }, {
        status: 'div',
        value: 2
      }, {
        status: 'div',
        value: 3
      }]
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

it('列表项目被点击，切换成编辑模式', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: {
      list: [{
        value: 1,
        status: 'div'
      }, {
        value: 2,
        status: 'div'
      }, {
        value: 3,
        status: 'div'
      }]
    }
  });
  const listItems = findDomByWrapper(wrapper, '[data-test="itemCon"]').at(1)
  listItems.trigger('click')
  expect(wrapper.emitted().statusToInput).toBeTruthy() // wrapper.emitted().statusToInput指这个 statues this.$emit('statusToInput', item);// 即使父组件传入的是statusToInputxx，测试会通过
});
