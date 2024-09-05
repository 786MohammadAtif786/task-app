<template>
  <div>
    <h2>Tasks</h2>
    <form @submit.prevent="addTask">
      <input v-model="newTask" type="text" placeholder="New Task" required />
      <button type="submit">Add Task</button>
    </form>
    <ul>
      <li v-for="task in tasks" :key="task._id">
        <input type="checkbox" v-model="task.completed" @change="updateTask(task._id, task.completed)" />
        {{ task.title }}
        <button @click="deleteTask(task._id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTaskStore } from '../stores/task';

export default {
  data() {
    return {
      newTask: ''
    };
  },
  computed: {
    tasks() {
      return useTaskStore().tasks;
    }
  },
  methods: {
    async addTask() {
      await useTaskStore().addTask(this.newTask);
      this.newTask = '';
    },
    async updateTask(id, completed) {
      await useTaskStore().updateTask(id, { completed });
    },
    async deleteTask(id) {
      await useTaskStore().deleteTask(id);
    }
  },
  async created() {
    await useTaskStore().fetchTasks();
  }
};
</script>
