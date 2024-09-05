<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl">Tasks</h2>
    <button @click="createTask" class="btn">Create Task</button>
    <ul>
      <li v-for="task in tasks" :key="task._id" class="list">
        {{ task.title }} - {{ task.status }}
        <button @click="updateTask(task._id)" class="btn">Complete</button>
        <button @click="deleteTask(task._id)" class="btn">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['tasks'])
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    async fetchTasks() {
      await this.$store.dispatch('fetchTasks');
    },
    
    async createTask() {
      const title = prompt('Enter task title');
      if (title) {
        await this.$store.dispatch('createTask', title);
      }
    },
    async updateTask(taskId) {
      await this.$store.dispatch('updateTask', { id: taskId, status: 'Completed' });
    },
    async deleteTask(taskId) {
      await this.$store.dispatch('deleteTask', taskId);
    }
  }
};
</script>

<style scoped>
.btn {
  background-color: #007bff;
  color: white;
  padding: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}
.list {
  margin: 10px;
}
</style>
