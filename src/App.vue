<template>
  <div id="app">
    <Header />
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/PageHeader.vue'

export default {
  name: 'app',
  components: {
    Header
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
