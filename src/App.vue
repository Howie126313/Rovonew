<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/PageHeader.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
body {
  background-color: black;
}

* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  /* max-width: 1860px; */
  margin: 0 auto;
}

</style>
