<template>
    <div>
        <!--<MyButton v-on:added="addIsCalled()" state="add"></MyButton>
        <MyButton v-on:deleted="deleteIsCalled()" state="delete"></MyButton>

        <br/>
        <TodoItem v-on:marked-as-pending="pendingIsCalled()" v-on:marked-as-done="doneIsCalled()" :todo="todo"></TodoItem>
        <TodoItem v-on:marked-as-pending="pendingIsCalled()" v-on:marked-as-done="doneIsCalled()" :todo="todo1"></TodoItem>-->
      <TodoItem 
        :key="todoItem.id" 
        v-for="todoItem in taskList" 
        :todo="todoItem">
      </TodoItem>

      <!-- Option2 -->
      <!--<template :key="todoItem.id" v-for="todoItem in taskList">
        <TodoItem :todo="todoItem"></TodoItem>
      </template>  -->
    </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';
//import MyButton from './components/MyButton.vue';

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
      }
  }

}
</script>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}
</style>
