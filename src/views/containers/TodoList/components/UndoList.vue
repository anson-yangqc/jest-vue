<template>
  <div class="undoList">
    <div data-test="count" class="count">
      <span class="left">正在进行</span>
      <span class="right">{{list.length}}</span>
    </div>
    <ul class="undoListUl">
      <li class="itemLi" v-for="(item,index) in list" :key="index" data-test="item">
        <span class="del" data-test="delete-button" @click="handleDel(item)">-</span>
        <input type="checkbox" />
        <div data-test="itemCon" @click="handleItemClick(item)">
          <span v-if="item.status === 'div'">{{item.value}}</span>
          <span v-else>
            <input
              v-model="item.value"
              autofocus
              style="width: 89%;"
              data-test="input"
              @blur="handleInputBlur(item)"
            />
          </span>
        </div>
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
    },
    handleItemClick (item) {
      this.$emit('statusToInput', item);
    },
    handleInputBlur (item) {
      this.$emit('reset', item);
    }
  }
};
</script>
<style lang="less" scoped>
.undoList {
  width: 600px;
  margin: 0 auto;
  .count {
    display: flex;
    margin-top: 10px;
    font-weight: bold;
    align-items: center;
    .left {
      font-size: 24px;
      flex: 1;
    }
    .right {
      font-size: 24px;
      width: 20px;
      text-align: right;
    }
  }
  .undoListUl {
    margin-top: 20px;
    .itemLi {
      height: 32px;
      line-height: 32px;
      background: #fff;
      position: relative;
      margin-bottom: 10px;
      padding: 0 40px;
      border-radius: 3px;
      border-left: 5px solid #629a9c;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
      input {
        position: absolute;
        top: 5px;
        left: 10px;
        width: 22px;
        height: 22px;
        cursor: pointer;
      }
      .del {
        position: absolute;
        top: 2px;
        right: -4px;
        display: inline-block;
        width: 26px;
        height: 26px;
        border-radius: 14px;
        border: 6px double #fff;
        background: #ccc;
        line-height: 14px;
        text-align: center;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
}
</style>
