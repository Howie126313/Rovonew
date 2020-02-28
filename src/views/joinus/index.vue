/*
 * @Author: Howie 
 * @Date: 2019-10-11 11:22:47 
 * @Last Modified by: Howie
 * @Last Modified time: 2020-02-27 16:04:51
 */
<template>
  <div id="joinus">
    <Header />
    <div class="container">
      <WordSwiper :options="options" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/PageHeader.vue'
import WordSwiper from '@/components/layout/WordSwiper.vue'

export default {
  components: {
    Header,
    WordSwiper
  },
  data () {
    return {
      options: {
        titleImg: 'http://47.116.199.18/static/pc/titleJoin.png',
        contentText: this.$store.getters.getJoinText,
        swiperArr: this.$store.getters.getSwiperArr
      }
    }
  }
}
</script>

<style scoped>
#joinus {
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