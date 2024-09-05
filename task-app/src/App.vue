<template>
 <header class="navbar">
   <div  class="nav-left">
    <Navbar />
  </div>
 </header>
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>

<style>

header {
    background-color: #333;
    color: #fff;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
}

.nav-left {
    display: flex;
}

.nav-left a {
    color: #fff;
    text-decoration: none;
    margin-right: 15px;
    font-size: 16px;
}

.nav-left a:hover {
    text-decoration: underline;
}

.nav-right {
    display: flex;
    align-items: center;
}



</style>
