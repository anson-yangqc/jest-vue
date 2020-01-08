// 会找到离它最近的__mocks__文件的axios
import {
  mount
} from '@vue/test-utils';
import TodoList from '@/views/containers/TodoList/TodoList.vue';
import {
  findDomByWrapper
} from '../../../../../../utils/testUtils';
import store from '@/store/index.js'

beforeEach(() => { // jest的钩子函数，每次运行测试用例前都会执行这个函数
  jest.useFakeTimers() // 每次重新定义 用jestTimer模拟原生的timer；对setTimeout的统计清零，从0开始
})
it('1用户进入页面时，请求远程数据；2列表应该展示远程返回的数据', () => {
  const wrapper = mount(TodoList, { // 执行mounted钩子函数
    store
  })
  wrapper.vm.$nextTick(() => {
    const listItems = findDomByWrapper(wrapper, '[data-test="item"]')
    expect(listItems.length).toEqual(2) // 即使写100，也会pass，但是又红色的提示，因为方法实际被忽略，没执行；因没有执行done，看 下面
  })
})

// mounted的请求延时5秒
// it('0mounted的请求延时5秒；1用户进入页面时，请求远程数据；2列表应该展示远程返回的数据', (done) => {
//   const wrapper = mount(TodoList, { // 此时渲染后会执行mounted钩子函数
//     store
//   })
//   expect(setTimeout).toHaveBeenCalledTimes(1) // mounted钩子函数 的setTimeout应该被调用一次
//   jest.runAllTimers()
//   wrapper.vm.$nextTick(() => {
//     const listItems = findDomByWrapper(wrapper, '[data-test="item"]')
//     expect(listItems.length).toEqual(2) // 这样才是准备得到数量
//     done()
//   })
// })
