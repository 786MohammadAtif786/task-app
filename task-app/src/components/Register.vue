<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl">Register</h2>
    <form @submit.prevent="register">
      <div class="mb-4">
        <label for="name" class="block">Name</label>
        <input v-model="name" type="text" id="name" class="input" required />
      </div>
      <div class="mb-4">
        <label for="email" class="block">Email</label>
        <input v-model="email" type="email" id="email" class="input" required />
      </div>
      <div class="mb-4">
        <label for="password" class="block">Password</label>
        <input v-model="password" type="password" id="password" class="input" required />
      </div>
      <button type="submit" class="btn">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        await axios.post('http://localhost:5000/api/users/register', {
          name: this.name,
          email: this.email,
          password: this.password
        });
        this.$router.push('/login');
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
  margin: 20px;
  padding: 10px;
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
