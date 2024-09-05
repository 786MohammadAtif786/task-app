<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl">Login</h2>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label for="email" class="block">Email</label>
        <input v-model="email" type="email" id="email" class="input" required />
      </div>
      <div class="mb-4">
        <label for="password" class="block">Password</label>
        <input v-model="password" type="password" id="password" class="input" required />
      </div>
      <button type="submit" class="btn">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:5000/api/users/login', {
          email: this.email,
          password: this.password
        });
        this.$store.commit('setToken', response.data.token);
        this.$router.push('/tasks');
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.input {
  width: 50%;
  margin: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.btn {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
