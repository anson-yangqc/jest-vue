import {
  shallowMount
} from '@vue/test-utils';
import TodoList from '@/views/containers/TodoList/TodoList.vue';
import Header from '@/views/containers/TodoList/components/Header.vue';

it('TodoList 初始化 undoList应该为空', () => {
  const wrapper = shallowMount(TodoList);
  const undoList = wrapper.vm.$data.undoList
  expect(undoList).toEqual([]); // undoList应该为空数组
});
it('TodoList 执行addItem会增加一个内容', () => {
  const addVal = 'testVal'
  const wrapper = shallowMount(TodoList);
  wrapper.vm.addUndoItem(addVal)
  const undoList = wrapper.vm.$data.undoList
  expect(undoList).toEqual([addVal]); // undoList应该为空数组
});

it('TodoList 执行addItem会增加一个内容2', () => {
  const addVal = 'testVal'
  const wrapper = shallowMount(TodoList);
  const header = wrapper.find(Header)
  header.vm.$emit('add', addVal)
  const undoList = wrapper.vm.$data.undoList
  expect(undoList).toEqual([addVal]); // undoList应该为空数组
});
