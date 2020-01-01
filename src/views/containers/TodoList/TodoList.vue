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
    delUndoItem (item) {},
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
