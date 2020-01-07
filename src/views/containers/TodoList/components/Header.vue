<template>
  <div class="header">
    <div class="header-container">
      TodoList
      <input
        class="header-input"
        data-test="input"
        v-model="inputValue"
        @keyup.enter="addTodoItem"
        @input="doChangeInputValue"
        placeholder="edit todoItem"
      />
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'HeaderVal',
  props: {},
  computed: {
    ...mapState({
      _inputValue: state => state.inputValue
    })
  },
  data () {
    return {
      inputValue: this._inputValue || ''
    };
  },
  methods: {
    ...mapMutations(['changeInputValue']),
    doChangeInputValue () {
      this.changeInputValue(this.inputValue);
    },
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
