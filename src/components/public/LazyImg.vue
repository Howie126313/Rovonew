/*
 * @Author: Howie 
 * @Date: 2020-02-27 16:39:33 
 * @Last Modified by: Howie
 * @Last Modified time: 2020-02-27 16:48:32
 */

<template>
  <div id="lazyImg">
    <img v-lazy="src" alt="">
  </div>
</template>

<script>
export default {
  props: {
    src: {
      require: true,
      type: String
    }
  }
}
</script>

<style scoped>
#lazyImg, #lazyImg > img {
  width: 100%;
  height: 100%;
}
</style>