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
    border-radius: 5px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24),
      0 1px 6px rgba(0, 0, 0, 0.45) inset;
    border: none;
    float: right;
    width: 360px;
    line-height: 30px;
    margin-top: 16px;
    outline: none;
    color: #333;
    text-indent: 12px;
  }
}
</style>
