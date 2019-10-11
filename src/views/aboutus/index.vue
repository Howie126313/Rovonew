/*
 * @Author: Howie 
 * @Date: 2019-10-11 11:22:47 
 * @Last Modified by: Howie
 * @Last Modified time: 2019-10-11 17:14:55
 */
<template>
  <div id="aboutus">
    <div class="container">
      <WordSwiper :options="options" />
    </div>
  </div>
</template>

<script>
import WordSwiper from '@/components/layout/WordSwiper.vue'

export default {
  components: {
    WordSwiper
  },
  data () {
    return {
      options: {
        titleImg: require('@/assets/img/titleAbout.png'),
        contentText: this.$store.getters.getAboutText,
        swiperArr: [1, 2, 3, 4]
      }
    }
  }
}
</script>

<style scoped>
#aboutus {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 40px;
}

.container {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
</style>