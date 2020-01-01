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
  const addVal = 'testVal'
  const wrapper = shallowMount(TodoList);
  wrapper.vm.addUndoItem(addVal)
  const undoList = wrapper.vm.$data.undoListData
  expect(undoList).toEqual([addVal]);
});
it('TodoList 执行addItem会增加一个内容 集成测试', () => {
  const addVal = 'testVal'
  const wrapper = shallowMount(TodoList);
  const header = wrapper.find(Header)
  header.vm.$emit('add', addVal)
  const undoListData = wrapper.vm.$data.undoListData
  expect(undoListData).toEqual([addVal])
});
it('TodoList del方法被调用，undoList列表内容会减少一个', () => {
  const wrapper = shallowMount(TodoList);
  wrapper.setData({
    undoListData: [1, 2, 3, 4]
  })
  wrapper.vm.delUndoItem(3)
  const undoListData = wrapper.vm.$data.undoListData
  expect(undoListData.length).toEqual(3);
  expect(undoListData).toEqual([1, 2, 4]);
});
