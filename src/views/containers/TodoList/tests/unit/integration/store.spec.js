import store from '@/store/index.js'

it(`当store接受changeInputValue的commit时,inputValue发生的变化`, () => {
  const value = '123'
  store.commit('changeInputValue', value)
  console.log('valuevaluevaluevaluevalue=', value)
  expect(store.state.inputValue).toContain(value) // 用toBe反而报错了
})
