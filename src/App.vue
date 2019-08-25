<template>
  <div id="app">
    <nav-bar/>
    <div id="content">
      <message/>
      <form/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Message from './components/Message'
import Form from './components/Form'
export default {
  name: 'App',
  components: {
    NavBar,
    Message,
    Form
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

#content {
  margin:0 10% 100px;
}
</style>
