<template>
  <header>
    <nav>
      <div class="flex space-x-4">
        <router-link to="/" >Home</router-link>
        <router-link v-if="!isLoggedIn" to="/login"
          >Login</router-link
        >
        <router-link
          v-if="!isLoggedIn"
          to="/register"
          >Register</router-link
        >
        <router-link v-if="isLoggedIn"  to="/tasks"
          >Tasks</router-link
        >
        <button
          v-if="isLoggedIn"
          class="logout-btn"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["token"]),
    isLoggedIn() {
      return !!this.token;
    },
  },
  methods: {
    ...mapActions(["logout"]),
    logout() {
      localStorage.removeItem("token");
      this.$store.commit("setToken", "");
      this.$router.push("/");
    },
  },
};
</script>



<style scoped>
.logout-btn {
    background-color: #ff4d4d;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.logout-btn:hover {
    background-color: #ff1a1a;
}
</style>
