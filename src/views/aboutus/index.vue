/*
 * @Author: Howie 
 * @Date: 2019-10-11 11:22:47 
 * @Last Modified by: Howie
 * @Last Modified time: 2019-10-26 15:17:36
 */
<template>
  <div id="aboutus">
    <Header />
    <div class="space"></div>
    <div class="container">
      <WordSwiper :options="options" />
    </div>
  </div>
</template>

<script>
import WordSwiper from '@/components/layout/WordSwiper.vue'
import Header from '@/components/PageHeader.vue'

export default {
  components: {
    Header,
    WordSwiper
  },
  data () {
    return {
      options: {
        titleImg: 'http://image.rovostudios.com/img/pc/titleAbout.png',
        contentText: this.$store.getters.getAboutText,
        swiperArr: this.$store.getters.getSwiperArr
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
  overflow: auto;
}

.container {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}

.space {
  width: 100%;
  height: 60px;
}
</style>