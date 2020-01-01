const findDomByWrapper = (wrapper, tag) => {
  return wrapper.findAll(tag) // 返回的是数组
  // return wrapper.find(tag) // 返回的单个
}
export {
  findDomByWrapper
}
