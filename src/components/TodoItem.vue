<template>
  <div v-on:click="clickTodo()" class="todo-item" :class="todo.state">
    <button><span>{{ todo.task }}</span> </button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  emits: ["marked-as-pending", "marked-as-done"],
  data() {
    return {
      state: "pending",
      buttonVisable: false
    }
  },
  methods: {
      mouseLeave() {
          this.buttonVisable = false
      },
      mouseOver() {
          console.log("mouse is over text from child")
          this.buttonVisable = true
      },
    clickTodo() {
      console.log('clicked');
      if(this.state == "pending") {
        this.state = "done"
        this.$emit("marked-as-done");
      } else {
        this.state = "pending"
        this.$emit("marked-as-pending");
      }
    }
  }
}
</script>

<style scoped>
  .todo-item {
    border: 1px solid black;
    width: 400px;
    padding: 10px;
  }
  .done {
    background-color: skyblue;
    color: white;
  }
  .pending {
    background-color: grey;
    color: black;
  }
</style>