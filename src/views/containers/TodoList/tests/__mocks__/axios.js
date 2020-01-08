const undolistData = {
  success: true,
  data: [{
    status: 'div',
    value: 'testValue'
  }, {
    status: 'divdiv',
    value: 'testValue'
  }]
}
export default {
  get(url) {
    if (url === '/getUndoList.json') {
      return new Promise((resolve, reject) => {
        resolve(undolistData)
      })
    }
  }
}
