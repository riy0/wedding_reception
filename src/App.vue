<template>
  <div id="app">
    <nav-bar/>
    <message/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Message from './components/Message'
export default {
  name: 'App',
  components:{
    NavBar,
    Message
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
