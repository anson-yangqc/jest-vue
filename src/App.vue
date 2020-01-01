<template>
  <div id="app">
    <!-- <router-view /> -->
    <TodoList />
  </div>
</template>
<script>
import TodoList from '@/views/containers/TodoList/TodoList.vue';
export default {
  name: 'TodoListVue',
  components: { TodoList },
  props: {}
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
}
ul {
  list-style: none;
}
</style>
