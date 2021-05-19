import { createApp } from 'vue'
import App from './App.vue'
import MyButton from './components/MyButton.vue'
import TodoItem from './components/TodoItem.vue'

const app = createApp(App);
app.component('MyButton', MyButton);
app.component('TodoItem', TodoItem);
app.mount('#app');