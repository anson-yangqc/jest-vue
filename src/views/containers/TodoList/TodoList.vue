<template>
  <div class="todoListWrap">
    <Header @add="addUndoItem" />
    <UndoList
      :list="undoListData"
      @handleDel="delUndoItem"
      @statusToInput="handleStatueToInput"
      @reset="handleStatueReset"
    ></UndoList>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import UndoList from "./components/UndoList.vue";
import axios from "axios";
export default {
  name: "TodoList",
  props: {},
  data() {
    return {
      undoListData: []
    };
  },
  components: { Header, UndoList },
  mounted() {
    // setTimeout(() => {
    axios
      .get("/getUndoList.json")
      .then(res => {
        this.undoListData = res.data;
      })
      .catch(e => {
        debugger;
      });
    // }, 4000);
  },
  methods: {
    delUndoItem(item) {
      for (let i = this.undoListData.length - 1; i >= 0; i--) {
        const opt = this.undoListData[i];
        if (item.value === opt.value) {
          this.undoListData.splice(i, 1);
          break;
        }
      }
    },
    addUndoItem(inputVal) {
      this.undoListData.push({ status: "div", value: inputVal });
    },
    handleStatueToInput(item) {
      for (let i = this.undoListData.length - 1; i >= 0; i--) {
        const opt = this.undoListData[i];
        if (item.value === opt.value) {
          opt.status = "input";
        } else {
          opt.status = "div";
        }
      }
    },
    handleStatueReset(item) {
      for (let i = this.undoListData.length - 1; i >= 0; i--) {
        const opt = this.undoListData[i];
        opt.status = "div";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.todoListWrap {
}
</style>
