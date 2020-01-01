<template>
  <div class="todoListWrap">
    <Header @add="addUndoItem" />
    <UndoList :list="undoListData" @handleDel="delUndoItem"></UndoList>
  </div>
</template>
<script>
import Header from './components/Header.vue';
import UndoList from './components/UndoList.vue';
export default {
  name: 'TodoList',
  props: {},
  data () {
    return {
      undoListData: []
    };
  },
  components: { Header, UndoList },
  methods: {
    delUndoItem (item) {
      for (let i = this.undoListData.length - 1; i >= 0; i--) {
        const opt = this.undoListData[i];
        if (item === opt) {
          this.undoListData.splice(i, 1);
          break;
        }
      }
    },
    addUndoItem (inputVal) {
      this.undoListData.push(inputVal);
    }
  }
};
</script>
<style lang="less" scoped>
.todoListWrap {
}
</style>
