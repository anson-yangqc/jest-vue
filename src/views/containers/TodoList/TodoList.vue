<template>
  <div class="todoListWrap">
    <Header @add="addUndoItem" />
    <ul>
      <li v-for="(item, index) in undoList" :key="index">{{ item }}</li>
    </ul>
  s</div>
</template>
<script>
import Header from './components/Header.vue';
export default {
  name: 'TodoList',
  props: {},
  data () {
    return {
      undoList: []
    };
  },
  components: { Header },
  methods: {
    addUndoItem (inputVal) {
      this.undoList.push(inputVal);
    }
  }
};
</script>
<style lang="less" scoped>
.todoListWrap {
  ul {
    width: 600px;
    margin: 0 auto;
  }
}
</style>
