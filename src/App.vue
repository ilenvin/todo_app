<template>
    <div>
        <!--<MyButton v-on:added="addIsCalled()" state="add"></MyButton>
        <MyButton v-on:deleted="deleteIsCalled()" state="delete"></MyButton>

        <br/>
        <TodoItem v-on:marked-as-pending="pendingIsCalled()" v-on:marked-as-done="doneIsCalled()" :todo="todo"></TodoItem>
        <TodoItem v-on:marked-as-pending="pendingIsCalled()" v-on:marked-as-done="doneIsCalled()" :todo="todo1"></TodoItem>-->
      <h2>Todo App</h2>
      <div>
        <input type="text" placeholder="Add your new todo" class="todo-item">
        <MyButton @todo-added="addTodo" v-show="buttonVisible" state="add">Add</MyButton>
      </div>
      <TodoItem 
        @todo-deleted="deleteTodo"
        :key="item.id" 
        v-for="item in taskList" 
        :todo="item">
      </TodoItem>

      <!-- Option2 -->
      <!--<template :key="todoItem.id" v-for="todoItem in taskList">
        <TodoItem :todo="todoItem"></TodoItem>
      </template>  -->
    </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';


export default {
    name: 'App',
    data() {
    return {
      taskList: [
        {
          id: 1,
          task: "Wash clothes",
          state: "pending"
        },
        {
          id: 2,
          task: "Read book",
          state: "done"
        },
        {
          id: 3,
          task: "Do homework",
          state: "pending"
        },

      ],
    }
    },
    components: {
      TodoItem
    },
    methods: {
      addIsCalled() {
        console.log('added');
      },
      deleteIsCalled() {
        console.log('deleted');
      },
      pendingIsCalled() {
        console.log("pending");
      },
      doneIsCalled() {
        console.log("done");
      },
      deleteTodo(id) {
        let newTasklList = [];
        let item;
        for (item of this.taskList) {
          if(item.id != id) {
            newTasklList.push(item)
          }
        }
        this.taskList = newTasklList;
      },
      addTodo() {
        if(this.item.length === 0) {
          return;
        }
        let id;
        this.items.push({
          id: id++,
          task: this.item,
          state: "pending"
        })
      }
  }

}
</script>

<style>
 .todo-item {
    display: flex;
    justify-content: space-between;
    border: 2px solid black;
    width: 400px;
    height: 1.5em;
    padding: 10px;
    margin-bottom: 1em;
  }

#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}
</style>
