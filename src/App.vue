<template>
  <img alt="Vue logo" src="./assets/logo.png">'
  <div v-show="isTrue">
  </div>

  <HomePage :movieSearch = "movies"/>

</template>

<script>

import HomePage from "@/components/HomePage";

export default {
  name: 'App',
  components: {
    HomePage,

  },
  data() {
    return {
      movies: [],
      isTrue: true
    }
  },
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
