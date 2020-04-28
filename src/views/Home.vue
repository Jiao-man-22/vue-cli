<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/newpage">Newpage</router-link>|
    <router-link to="/login_1">Login_1</router-link>|
    <router-link to="/home_T">Home_T</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
