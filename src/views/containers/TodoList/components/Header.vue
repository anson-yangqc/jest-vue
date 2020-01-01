<template>
  <div class="header">
    <div class="header-container">
      TodoList
      <input
        class="header-input"
        data-test="input"
        v-model="inputValue"
        @keyup.enter="addTodoItem"
        placeholder="edit todoItem"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderVal',
  props: {},
  data () {
    return {
      inputValue: ''
    };
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue);
        this.inputValue = '';
      }
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  background: #333;
  height: 60px;
  line-height: 60px;
  .header-container {
    width: 600px;
    margin: 0 auto;
    color: #fff;
    font-size: 24px;
  }
  .header-input {
    float: right;
    width: 360px;
    line-height: 24px;
    margin-top: 16px;
    outline: none;
    color: #333;
    text-indent: 12px;
  }
}
</style>
