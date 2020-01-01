<template>
  <div class="undoList">
    <div data-test="count">{{list.length}}</div>
    <ul>
      <li v-for="(item,index) in list" :key="index" data-test="item">
        <span data-test="delete-button" @click="handleDel(item)">删 除</span>
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'UndoList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {};
  },
  methods: {
    handleDel (item) {
      this.$emit('handleDel', item);
    }
  }
};
</script>
<style lang="less" scoped>
.undoList {
  ul {
    width: 600px;
    margin: 0 auto;
  }
}
</style>
