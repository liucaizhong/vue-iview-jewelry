<template>
  <div id="app">
    <dashboard />
  </div>
</template>

<script>
import Index from '@/components/Index'

export default {
  name: 'App',
  components: {
    dashboard: Index,
  },
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
}
</style>
