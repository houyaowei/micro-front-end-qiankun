<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="sub-app-viewport"></div>
  </div>
</template>

<script>

export default {
  name: 'root-view',
  components: {
  },
  props: {
    loading: Boolean,
    content: String,
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
