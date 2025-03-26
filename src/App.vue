<template>
  <div id="app">
    <!-- Render the VotingPage component here -->
    <VotingPage />
  </div>
</template>

<script>
import VotingPage from './components/VotingPage.vue'

export default {
  name: 'App',
  components: {
    VotingPage
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
