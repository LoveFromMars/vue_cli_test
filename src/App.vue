<template>
  <div id="app">
    <h1>Магазин</h1>
    <shop-main/>
  </div>
</template>

<script>

import shopMain from './components/shop-main'
export default {
  name: 'App',
  components: {
    shopMain
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
