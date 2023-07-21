<template>
  <UserMap> </UserMap>
</template>

<script>
import UserMap from './components/UserMap.vue'

export default {
  name: 'App',
  components: {
    UserMap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
  color: #2c3e50;
  background-color:beige;
  margin: 0px !important;
}
body {
  margin: 0;
}
</style>
