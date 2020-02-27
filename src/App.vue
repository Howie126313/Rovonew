<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      transitionName: 'transitionAnimation'
    }
  }
}
</script>

<style>
body {
  width: auto;
  height: auto;
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

@keyframes opacity{
  from{opacity: 0;}
  to{opacity: 1;}
}

.transitionAnimation {
  animation-name: opacity;
  animation-duration: 10s;
}

</style>
