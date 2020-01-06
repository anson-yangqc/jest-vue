import {
  shallowMount
} from '@vue/test-utils';
import TodoList from '@/views/containers/TodoList/TodoList.vue';
import UndoList from '@/views/containers/TodoList/components/UndoList.vue';
import Header from '@/views/containers/TodoList/components/Header.vue';

it('TodoList 初始化 undoList应该为空', () => {
  const wrapper = shallowMount(TodoList);
  const undoList = wrapper.vm.$data.undoListData
  expect(undoList).toEqual([]); // undoList应该为空数组
});
it('判断 TodoList 是有传参数到undoList组件的', () => {
  const wrapper = shallowMount(TodoList);
  const undoList = wrapper.find(UndoList)
  const list = undoList.props('list')
  expect(list).toBeTruthy(); // undoListData 是存在的
});
it('TodoList 执行addItem会增加一个内容', () => {
  const addVal = 1
  const wrapper = shallowMount(TodoList);
  wrapper.vm.addUndoItem(addVal)
  const undoList = wrapper.vm.$data.undoListData
  // expect(undoList.length).toEqual(1);
  expect(undoList).toEqual([{
    status: 'div',
    value: 1
  }]);
});
it('TodoList 执行addItem会增加一个内容 集成测试', () => {
  const addVal = 1
  const wrapper = shallowMount(TodoList);
  const header = wrapper.find(Header)
  header.vm.$emit('add', addVal)
  const undoListData = wrapper.vm.$data.undoListData
  expect(undoListData).toEqual([{
    status: 'div',
    value: 1
  }])
});
it('TodoList del方法被调用，undoList列表内容会减少一个', () => {
  const wrapper = shallowMount(TodoList);
  wrapper.setData({
    undoListData: [{
      status: 'div',
      value: 1
    }, {
      status: 'div',
      value: 2
    }, {
      status: 'div',
      value: 3
    }, {
      status: 'div',
      value: 4
    }]
  })
  wrapper.vm.delUndoItem({
    status: 'div',
    value: 3
  })
  const undoListData = wrapper.vm.$data.undoListData
  expect(undoListData.length).toEqual(3);
  expect(undoListData).toEqual([{
    status: 'div',
    value: 1
  }, {
    status: 'div',
    value: 2
  }, {
    status: 'div',
    value: 4
  }]);
});

it('changeStatus item状态变成编辑状态', () => {
  const wrapper = shallowMount(TodoList);
  wrapper.setData({
    undoListData: [{
      status: 'div',
      value: 1
    }, {
      status: 'div',
      value: 2
    }, {
      status: 'div',
      value: 3
    }]
  })
  wrapper.vm.handleStatueToInput({
    status: 'div',
    value: 2
  })
  expect(wrapper.vm.$data.undoListData).toEqual([{
    status: 'div',
    value: 1
  }, {
    status: 'input',
    value: 2
  }, {
    status: 'div',
    value: 3
  }])
})
